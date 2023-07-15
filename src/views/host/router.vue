<template>
  <smoo-card
    :visible="$attrs.visible"
    accordion="host"
    key="router"
    @show="$emit('show', $event)"
    @hidden="$emit('hidden', $event)"
  >
    <template #header>Hosting behind a router</template>

    <p>
      The router in your network is the device that manages your connection to the internet.
      Among other things, your router acts as a security barrier to prevent evil actors on the internet to access your devices directly.
      Because of that, when someone on the internet (or you yourself) tries to connect to your SMOO server using your
      <a-int name="faq" id="107">public</a-int> IPv4 address,
      your router will block that connection attempt.
    </p>

    <hr/>

    <h5><b-icon icon="skip-forward"/> Port Forwarding</h5>
    <p>
      In order to allow the connections, you'll need to tell your router via
      <a-int name="faq" id="109">port forwarding</a-int> to route all incoming connections
      for SMOO to your computer running the server software.
    </p>
    <b-alert variant="warning" show>
      <p>
        <b-icon icon="exclamation-triangle" class="text-danger" font-scale="1.5"
        /> <b>Open ports on the internet can be dangerous.</b>
        <br/>
        Bots constantly scan for open ports and automatically probe them for known exploit vectors.
        Bugs in the server software or sloppy programming of it could in theory be used by hackers to gain access to your computer.
      </p>
      <p>
        For that reason, when the SMOO server is exposed to the public internet, you should not run it directly on your computer.
        Instead it's advised to use some form of sandboxing/isolation to run it,
        e.g. with <a-int name="host" id="docker">Docker</a-int> and using an unprivileged user account.
      </p>
    </b-alert>
    <p>
      Note: you yourself should use the
      <a-int name="faq" id="107">private or local</a-int> IPv4 address
      of your computer to connect to your own server.
      Using your own public IPv4 address to connect adds unnecessary lag and might be affected by other restrictions.
    </p>

    <hr/>

    <h5><b-icon icon="shield-check"/> Firewall settings</h5>
    <p>
      Besides port forwarding, the firewall of your computer (or of the router) could also be a cause that prevents connections from reaching your server.
      Be sure to accept inbound <code>TCP</code> traffic from <code>all</code> source/remote ports for the specific target/local port <code>1027</code>.
    </p>
    <p>
      On <font-awesome-icon icon="fa-brands fa-windows"/> Windows when starting a server application for the first time,
      the Windows firewall will inform you that it has blocked some features for the program and asks if access should be allowed.
      Make sure that you allow it to communicate with private and public networks,
      otherwise you'll need to allow it manually in the advanced firewall settings of the system or via the command line.
    </p>
    <p>
      Manually adding a firewall rule to accept SMOO connections using the command line:
    </p>

<code class="style mb-3">
<label>
  <font-awesome-icon icon="fa-brands fa-windows"/>
  Windows
  <b-icon icon="info-circle-fill" v-b-tooltip.hover.html="'Run with <code>cmd.exe</code> as an administrator.'"/>
</label>
<pre class="code">
<del># add permanent rule</del>
netsh advfirewall firewall add rule dir=in action=allow protocol=TCP localport=<i>1027</i> edge=yes name="SMOO"

<del># remove permanent rule</del>
netsh advfirewall firewall delete rule name="SMOO"
</pre>
</code>

<code class="style">
<label>
  <font-awesome-icon icon="fa-brands fa-linux"/>
  GNU/Linux
</label>
<pre class="code">
<del># add temporary rule with iptables (gone after restart)</del>
sudo iptables -I INPUT -p tcp --dport <i>1027</i> -j ACCEPT -m comment --comment "SMOO"

<del># add permanent rule with ufw</del>
sudo ufw allow in from 0.0.0.0/0 to any port <i>1027</i> proto tcp comment "SMOO"

<del># remove permanent rule with ufw</del>
sudo ufw delete allow in from 0.0.0.0/0 to any port <i>1027</i> proto tcp comment "SMOO"
</pre>
</code>

    <hr/>

    <h5><b-icon icon="cloud-check"/> Test ports remotely</h5>
    <p>
      To test if the port is forwarded correctly, is not blocked by a firewall, and reach the running server software,
      you should use a remote port check service to test that it is open:
      <ul>
        <li><a-ext href="https://yougetsignal.com/tools/open-ports/">yougetsignal.com</a-ext></li>
        <li><a-ext href="https://portchecker.co/">portchecker.co</a-ext></li>
      </ul>
      Just change the port number to <kbd>1027</kbd> and click on <code>Check</code> on one of the websites.
      It tells you then if the port is open or not and the test itself should trigger log messages in the server output.
    </p>
    <p>
      An open port means that everything works as it should be.
      If someone is then not able to connect to your server using your
      <a-int name="faq" id="107">public</a-int> IPv4 address
      that most likely implies a problem on their end.
      Common causes:
      using the reconnect feature,
      entering the wrong IPv4 address or port,
      or not having configured the emulator correctly.
    </p>
    <p>
      A closed port on the other hand is a strong indicator that the server isn't reachable from the internet.
      Double check all port forwarding and firewall settings and that you have your own
      <a-int name="faq" id="107">public</a-int> IPv4 address that isn't shared with
      other customers of your ISP.
    </p>
  </smoo-card>
</template>
