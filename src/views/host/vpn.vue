<template>
  <smoo-card
    :visible="$attrs.visible"
    accordion="host"
    key="vpn"
    @show="$emit('show', $event)"
    @hidden="$emit('hidden', $event)"
  >
    <template #header>Hosting with a virtual private network</template>
    <p>
      If you aren't able to <a-int name="faq" id="109">port forward</a-int>,
      don't want to port forward for security reasons,
      don't want to share your public IPv4 address for privacy reasons,
      or <a-int name="host" id="remote">remote hosting</a-int> is not an option,
      then using a virtual private network (VPN) service might be your best alternative.
    </p>
    <p>
      Common VPN network providers (not to be confused with commercial VPN tunnel/proxy providers):
      <ul>
        <li><a-ext href="https://zerotier.com/">ZeroTier</a-ext></li>
        <li><a-ext href="https://radmin-vpn.com/">Radmin VPN</a-ext></li>
        <li><a-ext href="https://vpn.net/">Hamachi</a-ext></li>
      </ul>
    </p>
    <p>
      When using these services you install their (usually proprietary) software on your computer.
      Inside of the software you can create and/or join a private group/team/network, that connects your computer to a VPN with the other members.
      Every computer connected to that network will have an additional VPN IP address with which the others can communicate with them.
    </p>
    <b-alert variant="warning" show>
      <p>
        <b-icon icon="exclamation-triangle" class="text-danger" font-scale="1.5"
        /> <b>Only join a VPN with people you trust.</b>
        <br/>
        Joining the same network gives other members a more direct access to your computer than with using
        <a-int name="host" id="router">port forwarding behind a router</a-int>.
        What normally is only limited to a single port that you select and allow individually,
        is now full network access to your whole computer with all of its services.
      </p>
      <p>
        For your own security, make sure that you update your system regulary,
        disable services that they should have no access to,
        and do not under any circumstance disable your firewall while connected to a VPN with strangers.
      </p>
    </b-alert>
    <p>
      For SMOO one of the computers in that VPN will need to run the server software.
      The person running it should use the <a-int name="faq" id="107">private or local</a-int> IPv4 address of their computer
      to connect to their own server as usual.
    </p>
    <p>
      The other computers connected to the VPN will be able to connect to the server using the
      <a-int name="faq" id="107">private</a-int> VPN IPv4 address
      of the computer running the server.
      When playing with <a-int name="play" id="yuzu">yuzu</a-int>, then the VPN network adapter needs to be selected in the yuzu settings.
      Remember to change this back before trying to connect to non-VPN servers again.
    </p>

    <h5><b-icon icon="controller"/> Playing with a Nintendo Switch</h5>
    <p>
      The problem is, that this out of the box only works with emulators,
      because there is no VPN client that runs on a <a-int name="play" id="switch">Nintendo Switch</a-int>.
      For that reason, if only one person wants to play with a Switch,
      they should be the one running the server,
      so that they connect to their own server using the <a-int name="faq" id="107">private</a-int> IPv4 address of their computer within their home network.
    </p>
    <p>
      But if multiple persons from different locations want to play with a Switch, that approach doesn't work anymore.
      In that case additional Switch players that aren't hosting the server need to configure port forwarding
      on their computers (not on routers) that are connected to the VPN.
      That way the Switch will not connect to the server directly but to the
      <a-int name="faq" id="107">private</a-int> IPv4 address within the home network of the computer connected to the VPN,
      which will then port forward the connection to the server over the VPN.
    </p>
    <p>
      Manually adding port forwarding rules using the command line
      (replace <code style="color: #cc33cc !important;">${server_vpn_ip}</code>
      with the <a-int name="faq" id="107">private</a-int> VPN IPv4 address
      of the computer hosting the server):
    </p>
<code class="style mb-3">
<label>
  <font-awesome-icon icon="fa-brands fa-windows"/>
  Windows
  <b-icon icon="info-circle-fill" v-b-tooltip.hover.html="'Run with <code>cmd.exe</code> as an administrator.'"/>
</label>
<pre class="code">
<del># add permanent rule (also needs a <a-int name="host" id="router">firewall rule</a-int> for port <i>1027</i>)</del>
netsh interface portproxy add v4tov4 listenaddress=0.0.0.0 listenport=<i>1027</i> connectaddress=<u>${server_vpn_ip}</u> connectport=<b>1027</b>

<del># remove permanent rule</del>
netsh interface portproxy delete v4tov4 listenaddress=0.0.0.0 listenport=<i>1027</i>
</pre>
</code>

<code class="style">
<label>
  <font-awesome-icon icon="fa-brands fa-linux"/>
  GNU/Linux
</label>
<pre class="code">
<del># run a program to port forward (also needs a <a-int name="host" id="router">firewall rule</a-int> for port <i>1027</i>)</del>
socat TCP4-LISTEN:<i>1027</i>,fork TCP4:<u>${server_vpn_ip}</u>:<b>1027</b>

<del># add temporary rules with iptables (gone after restart)</del>
echo 1 | sudo tee /proc/sys/net/ipv4/ip_forward
sudo iptables -I PREROUTING  -t nat -p tcp --dport <i>1027</i> -j DNAT --to-destination <u>${server_vpn_ip}</u>:<b>1027</b> -m comment --comment "SMOO"
sudo iptables -I POSTROUTING -t nat -p tcp --dport <b>1027</b> -d <u>${server_vpn_ip}</u> -j MASQUERADE -m comment --comment "SMOO"
sudo iptables -I FORWARD -p tcp --dport <b>1027</b> -d <u>${server_vpn_ip}</u> -m state --state NEW,ESTABLISHED -j ACCEPT -m comment --comment "SMOO"
<del># what this does:
# 1. enable port forwarding on this system
# 2. change the destination address from the PC to the VPN server
# 3. change the source address of the Switch to that of the PC (to get replies back)
# 4. allow this specific port forwarding</del>
</pre>
</code>

  </smoo-card>
</template>
