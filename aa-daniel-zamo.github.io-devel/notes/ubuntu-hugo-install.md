## Requisitos previos

- git
- go
- Dart Sass -> Homebrew

## Go

```bash
sudo rm -rf /usr/local/go; sudo tar -C /usr/local/ -xzf go1.25.4.linux-amd
64.tar.gz && rm -v go1.25.4.linux-amd64.tar.gz

# Cargarlo al PATH
export PATH=$PATH:/usr/local/go/bin

go version

#echo 'export PATH=$PATH:/usr/local/go/bin' >> ~/.bashrc
#source ~/.bashrc
```

## Homebrew

```bash
/bin/bash -c "$(curl -fsSL https://raw.githubusercontent.com/Homebrew/install/HEAD/install.sh)"
```

## Hugo

- [github.com/gohugoio/hugo/releases](https://github.com/gohugoio/hugo/releases)

```bash
 wget https://github.com/gohugoio/hugo/releases/download/v0.152.2/hugo_extended_0.152.2_linux-amd64.tar.gz
 tar xzf hugo_extended_0.152.2_linux-amd64.tar.gz
 # sudo chmod 755 ./hugo # Revisar permisos
 sudo chown root: ./hugo
 sudo mv hugo /usr/local/bin/
 rm LICENSE hugo_extended_0.152.2_linux-amd64.tar.gz README.md

# Verificar
hugo version
```

## Referencias

- [Install Hugo on Linux](https://gohugo.io/installation/linux/)
- [Go](https://go.dev/)
- [Dart Sass](https://gohugo.io/functions/css/sass/#dart-sass)
- [Homebrew](https://brew.sh/)
