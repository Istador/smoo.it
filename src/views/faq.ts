import { Vue, Component } from 'vue-property-decorator'

interface IQuestion {
  id       : number
  question : string
  answer   : string
}

@Component
export default class FAQ extends Vue {
  get id () : number {
    return Number(this.$route.params.id || 0)
  }

  show (id: number) {
    if (id === this.id) { return }
    this.$router.replace({ name: 'faq', params: { id: id.toString() } })
  }

  hidden (id: number) {
    if (id !== this.id) { return }
    if (!this.$route.params.id) { return }
    this.$router.replace({ name: 'faq' })
  }

  mounted () {
    if (this.id === 0) {
      this.show(this.questions[0].id)
    }
  }

  questions : IQuestion[] = [
    {
      id       : 101,
      question : 'How do I control the mod?',
      answer   : `
        <p>
          Main menu:
          <ul>
            <li><smoo-btn ZL/> + <smoo-btn A/> - Mod configuration</li>
          </ul>
        </p>
        <p>
          Pause menu:
          <ul>
            <li><smoo-btn ZL/> + <smoo-btn A/> or <smoo-btn ZL/> + <smoo-btn B/> - Mod configuration</li>
          </ul>
        </p>
        <p>
          In-game:
          <ul>
            <li><smoo-btn L/> + <smoo-btn DLeft/> - Enable/disable Hide &amp; Seek [H&amp;S]</li>
            <li>[H&amp;S] <smoo-btn DUp/> - Switch between hider and seeker</li>
            <li>[H&amp;S] [Hider] <smoo-btn DLeft/> - Decrease hiding time</li>
            <li>[H&amp;S] [Hider] <smoo-btn DRight/> - Increase hiding time</li>
            <li>[H&amp;S] [Hider] <smoo-btn L/> + <smoo-btn DDown/> - Reset hiding time</li>
            <li>[H&amp;S] [Gravity] <smoo-btn L/> + <smoo-btn DRight/> - Toggle gravity camera</li>
            <li style="margin-top: 0.75em;"><smoo-btn ZR/> + <smoo-btn DUp/> - Open/close [Debug] menu</li>
            <li>[Debug] <smoo-btn ZR/> + <smoo-btn DLeft/> - Previous page</li>
            <li>[Debug] <smoo-btn ZR/> + <smoo-btn DRight/> - Next page</li>
            <li>[Debug] <smoo-btn ZL/> + <smoo-btn DLeft/> - Previous player</li>
            <li>[Debug] <smoo-btn ZL/> + <smoo-btn DRight/> - Next player</li>
          </ul>
        </p>
      `,
    },
    {
      id       : 102,
      question : 'How do I change the server I\'m connected to?',
      answer   : `
        By one of these methods:
        <ul>
          <li>
            In the main or pause menu hold <smoo-btn ZL/> and press <smoo-btn A/> to enter the hidden options menu
            where you can <code>Change Server IP</code>.
          </li>
          <li>Hold/press <smoo-btn ZL/> while starting the game. This will prompt you for the IP. <sup id="faq-prompt-trigger"><b-icon icon="info-circle-fill"/></sup></li>
          <li>Delete the <code>common.bin</code> file in the save directory. <sup id="faq-save-dir"><b-icon icon="info-circle-fill"/></sup></li>
        </ul>
        <b-tooltip target="faq-prompt-trigger" triggers="hover" style="text-align: justified;">
          Might not work with older versions of the mod.
        </b-tooltip>
        <b-tooltip target="faq-save-dir" triggers="hover" style="text-align: justified;">
          <p>On the Nintendo Switch that is on the internal storage and not on the SD card. You could use a save file backup app, to export, modify and then restore the directory.</p>
          <p class="mb-0">Inside the Yuzu or Ryujinx emulator you can right click on the game to get to its save directory.</p>
        </b-tooltip>
      `,
    },
    {
      id       : 103,
      question : 'How do I hack my Switch?',
      answer   : `
        <p>
          You need an <a href="https://ismyswitchpatched.com/" class="extern" target="_blank">unpatched</a>
          older revision of the Nintendo Switch, a microSDXC card, a USB-C connection cable,
          and a computer (PC/Laptop/Smartphone) or a specific payload injecting device.
          To make the RCM exploit safer and easier, it's advised to use a RCM jig.
        </p>
        <p>
          Follow this <a href="https://nh-server.github.io/switch-guide/" class="extern" target="_blank">guide</a>
          or alternatively/additionally <a href="https://switch.homebrew.guide/" class="extern" target="_blank">this one</a>.
        </p>
        <hr/>
        <p>
          The SD card should be formatted with <code>FAT32</code> and not with <code>exFAT</code>.
          Because <code>exFAT</code> is known for having issues with the Nintendo Switch causing corrupted files and crashes.
        </p>
        <p>
          For the purpose of downgrading the game to version <code>1.0.0</code> and/or to
          <router-link :to="{ name: 'faq', params: { id: 104 } }">dump</router-link>
          the game ROM to be used for emulators,
          make sure that you follow the guides regarding backing up the
          <a href="https://nh-server.github.io/switch-guide/user_guide/emummc/making_emummc/#getting-your-consoles-unique-keys" class="extern" target="_blank">console</a>
          and
          <a href="https://nh-server.github.io/switch-guide/extras/dumping_title_keys/" class="extern" target="_blank">title keys</a>
          using <a href="https://github.com/shchmue/Lockpick_RCM/releases" class="extern" target="_blank">Lockpick_RCM</a>.
        </p>
        <p>
          Because you need to connect the Nintendo Switch to the internet to play online, make sure that you properly
          <a href="https://nh-server.github.io/switch-guide/extras/blocking_nintendo/" class="extern" target="_blank">block Nintendo servers</a>
          to
          <a href="https://nh-server.github.io/switch-guide/faq/#is-it-safe-to-use-homebrew-will-i-get-banned" class="extern" target="_blank">not</a>
          get
          <a href="https://switch.homebrew.guide/faq.html#what-actions-can-get-me-banned" class="extern" target="_blank">banned</a>.
        </p>
      `,
    },
    {
      id       : 104,
      question : 'How do I obtain a SMO ROM for emulators?',
      answer   : `
        <p>
          The only <i>legal</i> way to obtain a ROM is by dumping it from your
          <router-link :to="{ name: 'faq', params: { id: 103 } }">hacked</router-link>
          Nintendo Switch onto the SD card.
        </p>
        <p>
          <code>@todo: add a section on how to dump the game.</code>
        </p>
      `,
    },
    {
      id       : 105,
      question : 'Am I on SMO version <code>1.0.0</code>?',
      answer   : `
        <p>
          When the game is downgraded using the
          <a href="https://github.com/Istador/odyssey-downgrade/releases" class="extern" target="_blank">Odyssey Downgrade</a>
          tool on the Nintendo Switch, the system and the main menu will show the game as being on version <code>1.3.0</code>.
          This is correct, because technically that is still the installed version.
        </p>
        <p>
          A good indicator if the game is really downgraded to <code>1.0.0</code>
          and is not running version <code>1.3.0</code> anymore
          is the <code>"Playing in VR"</code> option in the main menu.
          When the option is visible that means that the downgrade didn't work correctly
          and the game is still on version <code>1.3.0</code>.
        </p>
        <p>
          For emulators a real <code>1.0.0</code> ROM is needed, which can be
          <router-link :to="{ name: 'faq', params: { id: 104 } }">dumped</router-link>
          from the Nintendo Switch.
        </p>
      `,
    },
    {
      id       : 106,
      question : 'Will the mod work for SMO version <code>1.3.0</code> in the future?',
      answer   : `
        No, it's too much effort to develop, test, build, release and support different versions of the mod.
        Also apparently version <code>1.3.0</code> is more difficult to mod than version <code>1.0.0</code> of the game.
      `,
    },
    {
      id       : 107,
      question : 'What is a public/private IPv4 address?',
      answer   : `
        <p>
          A public IPv4 address is the address under which a computer is accessible on the internet by other computers.
          Usually your router receives a public IPv4 address from your ISP.
          But be aware that there are internet subscriptions that don't give you a public IPv4 address but only a IPv6 address (e.g. LTE, DS Lite).
        </p>
        <p>
          Private IPv4 addresses are usually only used inside your home network or for VPN networks and aren't publicly reachable from the internet.
          You can easily detect them by their leading numbers:
          <code>10.x.x.x</code>, <code>172.[16-31].x.x</code>, and <code>192.168.x.x</code> are all private addresses.
        </p>
        <p>
          Additionally <code>127.x.x.x</code> is reserved for the local computer.
          You can input <code>127.0.0.1</code> as the server IP in the <router-link :to="{ name: 'play' }">mod</router-link>,
          if you're playing with an emulator on the same computer that runs the <router-link :to="{ name: 'host' }">server</router-link>.
        </p>
        <p>
          <code>0.0.0.0</code> usually stands for an invalid IPv4 address.
          It is only valid in context of hosting a <router-link :to="{ name: 'host' }">server</router-link>
          inside the <code>settings.json</code> file to denote listening to connections from all networks.
          (On some systems it's a workable alias for <code>127.0.0.1</code>, but you should avoid using it.)
        </p>
      `,
    },
    {
      id       : 108,
      question : 'Does this mod work with IPv6?',
      answer   : `
        <p>
          No.
          The Nintendo Switch doesn't support IPv6 natively.
          As long as Nintendo doesn't change this, or there's a homebrew network stack that support it, this will likely never change.
        </p>
      `,
    },
    {
      id       : 109,
      question : 'How do I port forward?',
      answer   : `
        <p>This depends on your specific router model.</p>
        <p>
          Usually you open the web interface of your router, login there, and search for an option that let you configure port forwarding.
          Common router addresses are:
          <ul>
            <li><a href="http://192.168.0.1/" class="extern" target="_blank">192.168.0.1</a></li>
            <li><a href="http://192.168.1.1/" class="extern" target="_blank">192.168.1.1</a></li>
          </ul>
          If you can't figure it out, check the outside of your router (usually there's a sticker on it),
          consult its manual, or check the default gateway of your network adapter.
        </p>
        <p>
          Once you found the settings, you want to configure:
          <ul>
            <li>Port: <code>1027</code> (internal &amp; external)</li>
            <li>Protocol: <code>TCP</code></li>
          </ul>
          Additionally you also need to say to which computer inside your network the port shall be forwarded to.
          You want to forward the port to the computer that runs the <router-link :to="{ name: 'host' }">server</router-link>.
          Most routers will give you the option to select one of the currently connected devices.
          (Or you have already selected it to reach the port forwarding settings.)
          But sometimes you need to provide its private IP address manually.
        </p>
      `,
    },
  ]
}
