# linter-makensis

[![apm](https://img.shields.io/apm/l/linter-makensis.svg?style=flat-square)](https://atom.io/packages/linter-makensis)
[![apm](https://img.shields.io/apm/v/linter-makensis.svg?style=flat-square)](https://atom.io/packages/linter-makensis)
[![apm](https://img.shields.io/apm/dm/linter-makensis.svg?style=flat-square)](https://atom.io/packages/linter-makensis)
[![Travis](https://img.shields.io/travis/idleberg/atom-linter-makensis.svg?style=flat-square)](https://travis-ci.org/idleberg/atom-linter-makensis)
[![David](https://img.shields.io/david/idleberg/atom-linter-makensis.svg?style=flat-square)](https://david-dm.org/idleberg/atom-linter-makensis)
[![David](https://img.shields.io/david/dev/idleberg/atom-linter-makensis.svg?style=flat-square)](https://david-dm.org/idleberg/atom-linter-makensis?type=dev)
[![Gitter](https://img.shields.io/badge/chat-Gitter-ed1965.svg?style=flat-square)](https://gitter.im/NSIS-Dev/Atom)

[Atom Linter](https://atomlinter.github.io/) provider for [NSIS](https://nsis.sourceforge.net), using `makensis`

## Prerequisites

Make sure NSIS is installed with `makensis` is in your [PATH environmental variable](http://superuser.com/a/284351/195953).

### Windows

Download the NSIS installer from [SourceForge](https://sourceforge.net/p/nsis) and run setup.

Alternatively, you can install NSIS through [Chocolatey](https://chocolatey.org/packages/nsis):

``` bash
choco install nsis
```

### Linux

Install NSIS from your distribution's default package manager, for example:

``` bash
# Debian
sudo apt-get install nsis

# Red Hat
sudo dnf install nsis
```

### macOS

Install NSIS using [Homebrew](http://brew.sh/) or [MacPorts](https://www.macports.org/):

``` bash
# Homebrew
brew install nsis

# MacPorts
port install nsis
```

## Installation

### apm

Install `linter-makensis` from Atom's [Package Manager](http://flight-manual.atom.io/using-atom/sections/atom-packages/) or the command-line equivalent:

`$ apm install linter-makensis`

### Using Git

Change to your Atom packages directory:

```bash
# Windows
$ cd %USERPROFILE%\.atom\packages

# Linux & macOS
$ cd ~/.atom/packages/
```

Clone repository as `linter-makensis`:

```bash
$ git clone https://github.com/idleberg/atom-linter-makensis linter-makensis
```

Inside the cloned directory, install Node dependencies:

```bash
$ yarn || npm install
```

## License

This work is dual-licensed under [The MIT License](https://opensource.org/licenses/MIT) and the [GNU General Public License, version 2.0](https://opensource.org/licenses/GPL-2.0)

## Donate

You are welcome support this project using [Flattr](https://flattr.com/submit/auto?user_id=idleberg&url=https://github.com/idleberg/atom-linter-makensis) or Bitcoin `17CXJuPsmhuTzFV2k4RKYwpEHVjskJktRd`
