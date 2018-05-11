# linter-makensis

[![apm](https://img.shields.io/apm/l/linter-makensis.svg?style=flat-square)](https://atom.io/packages/linter-makensis)
[![apm](https://img.shields.io/apm/v/linter-makensis.svg?style=flat-square)](https://atom.io/packages/linter-makensis)
[![apm](https://img.shields.io/apm/dm/linter-makensis.svg?style=flat-square)](https://atom.io/packages/linter-makensis)
[![Travis](https://img.shields.io/travis/idleberg/atom-linter-makensis.svg?style=flat-square)](https://travis-ci.org/idleberg/atom-linter-makensis)
[![David](https://img.shields.io/david/idleberg/atom-linter-makensis.svg?style=flat-square)](https://david-dm.org/idleberg/atom-linter-makensis)
[![David](https://img.shields.io/david/dev/idleberg/atom-linter-makensis.svg?style=flat-square)](https://david-dm.org/idleberg/atom-linter-makensis?type=dev)
[![Gitter](https://img.shields.io/badge/chat-Gitter-ed1965.svg?style=flat-square)](https://gitter.im/NSIS-Dev/Atom)

[Atom Linter](https://atomlinter.github.io/) provider for [NSIS](https://nsis.sourceforge.net), using `makensis`

![Screenshot](https://raw.github.com/idleberg/atom-linter-makensis/master/screenshot.png)

*Screenshot of linter-makensis with [Fira Code](http://mozilla.github.io/Fira/) font & the [Hopscotch](https://atom.io/themes/hopscotch) theme*

## Prerequisites

Make sure NSIS v3.0 (or higher) is installed with `makensis` is in your [PATH environmental variable](http://superuser.com/a/284351/195953).

### Windows

Download the NSIS installer from [SourceForge](https://sourceforge.net/p/nsis) and run setup. Once completed, you need to edit your [PATH environmental variable](http://superuser.com/a/284351/195953).

Alternatively, you can install NSIS through [Chocolatey](https://chocolatey.org/packages/nsis):

```sh
$ choco install nsis
```

### Linux

Install NSIS from your distribution's default package manager, for example:

```sh
# Debian
$ sudo apt-get -t experimental install nsis

# Red Hat
$ sudo dnf install nsis
```

### macOS

Install NSIS using [Homebrew](http://brew.sh/) or [MacPorts](https://www.macports.org/):

```sh
# Homebrew
$ brew install nsis

# MacPorts
$ port install nsis
```

## Installation

### apm

Install `linter-makensis` from Atom's [Package Manager](http://flight-manual.atom.io/using-atom/sections/atom-packages/) or the command-line equivalent:

`$ apm install linter-makensis`

### Using Git

Change to your Atom packages directory:

```
# Windows
$ cd %USERPROFILE%\.atom\packages

# Linux & macOS
$ cd ~/.atom/packages/
```

Clone repository as `linter-makensis`:

```sh
$ git clone https://github.com/idleberg/atom-linter-makensis linter-makensis
```

Inside the cloned directory, install Node dependencies:

```sh
$ yarn || npm install
```

## Usage

Your code gets linted whenever you save your document. To tweak the default settings, run *“Linter MakeNSIS: Open Settings”* from the [command-palette](https://atom.io/docs/latest/getting-started-atom-basics#command-palette).

### Settings

Setting             | Default    | Description 
--------------------|------------|------------
Path to MakeNSIS    | `makensis` | Specify the full path to `makensis`
PPO Mode            | `true`     | The pre-process mode lints much faster, but ignores warning (unless in strict mode)
Strict Mode         | `false`    | Treats warnings as errors
Manage Dependencies | `true`     | When enabled, third-party dependencies will be installed automatically
Prepend Code        |  `""`      | Semicolon-separated list of commands to be prepended to your script
Append Code         |  `""`      | Semicolon-separated list of commands to be appended to your script
Use Wine            | `false`    | When on a non-Windows platform, you can compile installers using [Wine](https://www.winehq.org/)

## Related

- [atom-language-nsis](https://atom.io/packages/language-nsis) - NSIS package for Atom
- [node-makensis](https://www.npmjs.com/package/makensis) - Node wrapper for `makensis`
- [vscode-nsis](https://marketplace.visualstudio.com/items?itemName=idleberg.nsis) - NSIS package for Visual Studio Code

## License

This work is dual-licensed under [The MIT License](https://opensource.org/licenses/MIT) and the [GNU General Public License, version 2.0](https://opensource.org/licenses/GPL-2.0)

## Donate

You are welcome support this project using [Flattr](https://flattr.com/submit/auto?user_id=idleberg&url=https://github.com/idleberg/atom-linter-makensis) or Bitcoin `17CXJuPsmhuTzFV2k4RKYwpEHVjskJktRd`
