# linter-makensis

[![apm](https://flat.badgen.net/apm/license/linter-makensis)](https://atom.io/packages/linter-makensis)
[![apm](https://flat.badgen.net/apm/v/linter-makensis)](https://atom.io/packages/linter-makensis)
[![apm](https://flat.badgen.net/apm/dl/linter-makensis)](https://atom.io/packages/linter-makensis)
[![CI](https://img.shields.io/github/actions/workflow/status/idleberg/atom-hyperclick-nsis/default.yml?style=flat-square)](https://github.com/idleberg/atom-hyperclick-nsis/actions)

[Atom Linter](https://atomlinter.github.io/) provider for [NSIS](https://nsis.sourceforge.net), using `makensis`

![Screenshot](https://raw.github.com/idleberg/atom-linter-makensis/master/screenshot.png)

*Screenshot of linter-makensis with [Fira Code](http://mozilla.github.io/Fira/) font & the [Hopscotch](https://atom.io/themes/hopscotch) theme*

## Prerequisites

Make sure that NSIS is properly installed with `makensis` in your PATH [environment variable](http://superuser.com/a/284351/195953).

### Windows

Download the NSIS installer from [SourceForge](https://sourceforge.net/p/nsis) and run setup. Once completed, you need to edit your environment variable manually.

Alternatively, you can install NSIS through [Scoop](https://github.com/NSIS-Dev/scoop-nsis):

```sh
$ scoop install nsis/nsis
```

### Linux

Install NSIS from your distribution's default package manager, for example:

```sh
# Debian
$ sudo apt-get nsis

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

```powershell
# Windows Powershell
cd $Env:USERPROFILE\.atom\packages

# Windows Command Prompt
$ cd %USERPROFILE%\.atom\packages
```

```bash
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
Pre-process Mode    | `Safe PPO` | The pre-process mode lints much faster, but ignores warnings (unless in strict mode)
Strict Mode         | `false`    | Treats warnings as errors
Manage Dependencies | `true`     | When enabled, third-party dependencies will be installed automatically
Prepend Code        |  `[]`      | Comma-separated list of commands to be prepended to your script
Append Code         |  `[]`      | Comma-separated list of commands to be appended to your script
Use Wine            | `false`    | When on a non-Windows platform, you can compile installers using [Wine](https://www.winehq.org/)

## Related

- [atom-language-nsis](https://atom.io/packages/language-nsis) - NSIS package for Atom
- [vscode-nsis](https://marketplace.visualstudio.com/items?itemName=idleberg.nsis) - NSIS package for Visual Studio Code
- [node-makensis](https://www.npmjs.com/package/makensis) - Node wrapper for `makensis`

## License

This work is licensed under [The MIT License](https://opensource.org/licenses/MIT)