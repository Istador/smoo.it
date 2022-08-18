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
            <b-icon icon="info-circle-fill" id="faq-change-ip"/>
            <b-tooltip target="faq-change-ip" triggers="hover">
              <p>
                Newer versions of the mod will automatically save the game after changing the IP or port.
                In the <code>v1.0.0</code> release version you'll need to manually save.
              </p>
              <p>
                The <code>Reconnect to Server</code> feature is buggy and might crash the game.
                It's best to restart the game after changing the server.
              </p>
            </b-tooltip>
          </li>
          <li>
            Hold/press <smoo-btn ZL/> while starting the game. This will prompt you for the IP.
            <b-icon icon="info-circle-fill" id="faq-prompt-trigger"/>
            <b-tooltip target="faq-prompt-trigger" triggers="hover">
              Might not work with older versions of the mod.
            </b-tooltip>
          </li>
          <li>
            Delete the <code>common.bin</code> file in the save directory.
            <b-icon icon="info-circle-fill" id="faq-save-dir"/>
            <b-tooltip target="faq-save-dir" triggers="hover">
              <p>
                On the Nintendo Switch that is on the internal storage and not on the SD card.
                You could use a save file backup app, to export, modify and then restore the directory.
              </p>
              <p>
                Inside the Yuzu or Ryujinx emulator you can right click on the game to get to its save directory.
              </p>
            </b-tooltip>
          </li>
        </ul>
      `,
    },
    {
      id       : 103,
      question : 'How do I hack my Switch?',
      answer   : `
        <p>
          You need an <a-ext href="https://ismyswitchpatched.com/">unpatched</a-ext>
          older revision of the Nintendo Switch, a microSDXC card, a USB-C connection cable,
          and a computer (PC/Laptop/Smartphone) or a specific payload injecting device.
          To make the RCM exploit safer and easier, it's advised to use a RCM jig.
        </p>
        <p>
          Follow this <a-ext href="https://nh-server.github.io/switch-guide/">guide</a-ext>
          or alternatively/additionally <a-ext href="https://switch.homebrew.guide/">this one</a-ext>.
        </p>
        <hr/>
        <p>
          The SD card should be formatted with <code>FAT32</code> and not with <code>exFAT</code>.
          Because <code>exFAT</code> is known for having issues with the Nintendo Switch causing corrupted files and crashes.
        </p>
        <p>
          For the purpose of
          <a-int name="play" id="switch">downgrading</a-int>
          the game to version <code>1.0.0</code> and/or to
          <a-int name="faq" id="104">dump</a-int>
          the game ROM to be used for emulators,
          make sure that you follow the guides regarding backing up the
          <a-ext href="https://nh-server.github.io/switch-guide/user_guide/emummc/making_emummc/#getting-your-consoles-unique-keys">console keys</a-ext>
          using <a-ext href="https://github.com/shchmue/Lockpick_RCM/releases">Lockpick_RCM</a-ext>.
        </p>
        <p>
          Because you need to connect the Nintendo Switch to the internet to play online, make sure that you properly
          <a-ext href="https://nh-server.github.io/switch-guide/extras/blocking_nintendo/">block Nintendo servers</a-ext>
          to
          <a-ext href="https://nh-server.github.io/switch-guide/faq/#is-it-safe-to-use-homebrew-will-i-get-banned">not</a-ext>
          get
          <a-ext href="https://switch.homebrew.guide/faq.html#what-actions-can-get-me-banned">banned</a-ext>.
        </p>
      `,
    },
    {
      id       : 104,
      question : 'How do I obtain a SMO ROM for emulators?',
      answer   : `
        <p>
          The only <i>legal</i> way to obtain a ROM is by dumping it from your
          <a-int name="faq" id="103">hacked Nintendo Switch</a-int>
          onto the SD card.
        </p>
        <hr/>
        <p>
          The <a-ext href="https://yuzu-emu.org/help/quickstart/#dumping-cartridge-games">Yuzu Quickstart Guide</a-ext>
          has a good section on how to do that.
        </p>
        <p>
          The short summary of it is, that you download the latest
          <a-ext href="https://github.com/DarkMatterCore/nxdumptool/releases">nxdumptool</a-ext>
          <b-icon icon="info-circle-fill" id="faq-nxdumptool-keys"/>
          <b-tooltip target="faq-nxdumptool-keys" triggers="hover">
            Please keep in mind, that <code>nxdumptool</code> needs the
            <a-int name="faq" id="103">console keys</a-int>
            on the SD card in order to work.
          </b-tooltip>
          and put it onto your SD card. (If it isn't already there. Some guides include it by default.)
          You then run it on the Nintendo Switch from the homebrew menu in the <code>title override mode</code>.
          <b-icon icon="info-circle-fill" id="faq-override-mode"/>
          <b-tooltip target="faq-override-mode" triggers="hover">
            This means that you don't start the homebrew menu via the <code>Album</code>, but instead
            you hold down <smoo-btn R/> while launching any game.
          </b-tooltip>
        </p>
        <p>
          Dump game from inserted gamecard:
          <ul>
            <li><code>Dump gamecard content</code></li>
            <li><code>Nintendo Submission Package (NSP) dump</code></li>
            <li><code>Split output dump (FAT32 support): Yes</code></li>
            <li><code>Start NSP dump process</code></li>
          </ul>
        </p>
        <p>
          Dump installed game (eShop):
          <ul>
            <li><code>Dump installed SD card / eMMC content</code></li>
            <li>Select SMO</li>
            <li><code>Nintendo Submission Package (NSP) dump</code></li>
            <li><code>Dump base application NSP</code></li>
            <li><code>Split output dump (FAT32 support): Yes</code></li>
            <li><code>Remove console specific data: Yes</code></li>
            <li><code>Generate ticket-less dump: Yes</code></li>
            <li><code>Start NSP dump process</code></li>
          </ul>
        </p>
        <p>
          The resulting ROM will be located on the SD card inside <code>/switch/nxdumptool/NSP/</code>.
          Because the SMO game has a size of over 4 GB the dump will be splitted into two files.
          On your computer (with a partition that isn't <code>FAT32</code>) you should merge the files together using the
          <a-ext href="https://github.com/emiyl/nxDumpMerger/releases">nxDumpMerger</a-ext>.
        </p>
      `,
    },
    {
      id       : 105,
      question : 'Am I on SMO version <code>1.0.0</code>?',
      answer   : `
        <p>
          When the game is downgraded using the
          <a-ext href="https://github.com/Istador/odyssey-downgrade/releases">Odyssey Downgrade</a-ext>
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
          <a-int name="faq" id="104">dumped</a-int>
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
          <b>TL;DR</b>
          <ul>
            <li>
              When you're hosting a server, then
              <a-ext href="https://www.google.com/search?q=What+is+my+IP">google "What is my IP"</a-ext>
              and give your public IP to other players (requires <a-int name="faq" id="109">port forwarding</a-int>).
            </li>
            <li>
              In a emulator with the server running on the same PC: use <code>127.0.0.1</code> (only valid on your PC).
            </li>
            <li>
              On a Nintendo Switch connecting to the server on your PC: use the private IP of your PC (only valid inside your network).
            </li>
            <li>
              Use <code>0.0.0.0</code> only in the <a-int name="host" id="settings">settings.json</a-int>.
            </li>
          </ul>
        </p>
        <hr/>
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
          You can input <code>127.0.0.1</code> as the server IP in the <a-int name="play">mod</a-int>,
          if you're playing with an emulator on the same computer that runs the <a-int name="host">server</a-int>.
        </p>
        <p>
          <code>0.0.0.0</code> usually stands for an invalid IPv4 address.
          It is only valid in context of hosting a <a-int name="host">server</a-int>
          inside the <a-int name="host" id="settings">settings.json</a-int> file to denote listening to connections from all networks.
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
            <li><a-ext href="http://192.168.0.1/">192.168.0.1</a-ext></li>
            <li><a-ext href="http://192.168.1.1/">192.168.1.1</a-ext></li>
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
          You want to forward the port to the computer that runs the <a-int name="host">server</a-int>.
          Most routers will give you the option to select one of the currently connected devices.
          (Or you have already selected it to reach the port forwarding settings.)
          But sometimes you need to provide its private IP address manually.
        </p>
      `,
    },
    {
      id       : 110,
      question : 'Something doesn\'t work / Where do I get help?',
      answer   : `
        <p>
          Make sure that you read all instructions on this website thoroughly before bothering other people.
        </p>
        <p>
          If you sill can't figure it out or have problems, head over to the
          <a-ext href="https://discord.gg/w3TnB899ww">official Discord server</a-ext>.
          It's an active community of people that might be able and willing to help you in one of the help channels.
        </p>
        <p>
          The issues sections of the GitHub projects for the
          <a-ext href="https://github.com/CraftyBoss/SuperMarioOdysseyOnline/issues">mod</a-ext>
          and the
          <a-ext href="https://github.com/Sanae6/SmoOnlineServer/issues">server</a-ext>
          are NOT for support,
          but for submitting actual bugs and feature requests.
          When submitting a bug, make sure that you describe it in detail
          and that you provide log files and/or crash reports if available.
        </p>
      `,
    },
  ]
}
