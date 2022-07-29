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
          <li>Hold/press <smoo-btn ZL/> while starting the game, will prompt you for the IP.</li>
          <li>Delete the <code>common.bin</code> file in the save directory.</li>
        </ul>
      `,
    },
    {
      id       : 103,
      question : 'How do I hack my Switch?',
      answer   : `
        <p>
          You need an <a href="https://ismyswitchpatched.com/" class="extern" target="_blank">unpatched</a>
          older revision of the Nintendo Switch, a microSDXC card, a USB-C connection cable,
          and a computer (PC/Laptop/Smartphone) or a specific paylod injecting device.
          To make the RCM exploit safer and easier, it's advised to use a RCM jig.
        </p>
        <p>
          Follow this <a href="https://nh-server.github.io/switch-guide/" class="extern" target="_blank">guide</a>
          or alternatively/additionally <a href="https://switch.homebrew.guide/" class="extern" target="_blank">this one</a>.
        </p>
      `,
    },
    {
      id       : 104,
      question : 'How do I obtain a SMO ROM for emulators?',
      answer   : `
        <p>The only <i>legal</i> way to obtain a ROM is by dumping it from your hacked Switch onto the SD card.</p>
      `,
    },
    {
      id       : 105,
      question : 'Am I on SMO version <code>1.0.0</code>?',
      answer   : `
        <p>
          When the game is downgraded on the Switch, the system and the main menu will still show <code>1.3.0</code>, which is correct.
        </p>
        <p>
          A good indicator if the game is on version <code>1.3.0</code> or lower is the <code>Play in VR</code> button in the main menu.
          When the button is visible that means the downgrade didn't work and the game is still on version <code>1.3.0</code>.
        </p>
        <p>
          For emulators a real <code>1.0.0</code> ROM is needed, which can be dumped from the Switch.
        </p>
      `,
    },
    {
      id       : 106,
      question : 'Will the mod work for SMO version <code>1.3.0</code> in the future?',
      answer   : 'No, it\'s too much effort to develop, test, build, release and support different versions of the mod.',
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
          inside the <code>settings.json</code> file to denote listining to connections from all networks.
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
          As long as Nintendo doesn't change this, or there's a homebrew network stack that support it, this'll likely never change.
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
