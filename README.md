# README.md


<img align="right" width="150" alt="logo Hugo theme Stack" src="https://user-images.githubusercontent.com/5889006/190859553-5b229b4f-c476-4cbd-928f-890f5265ca4c.png">

# SSG Hugo Theme Stack Starter Template

Este sitio esta generado utilizando el start template de [Hugo theme Stack](https://github.com/CaiJimmy/hugo-theme-stack). Utiliza la característica de [Hugo modules](https://gohugo.io/hugo-modules/) para cargar el tema (theme).

Incluye una estructura y configuración de tema básico. Se ha configurado **GitHub Action** para implementar el tema automáticamente sobre una página pública de GitHub (Github Page). Además, cuenta con una tarea cron para actualizar el tema automáticamente a diario.

## Configuración inicial

1. Click sobre *Use this template*, and *create your repository as `<username>.github.io` on GitHub*.
![Paso 1](https://user-images.githubusercontent.com/5889006/156916624-20b2a784-f3a9-4718-aa5f-ce2a436b241f.png)

2. Una vez creado el repositorio, crea un espacio de código (codespace) de GitHub asociado a él.
   ![Espacio de código (Create codespace)](https://user-images.githubusercontent.com/5889006/156916672-43b7b6e9-4ffb-4704-b4ba-d5ca40ffcae7.png)

3. ¡Listo! Ya está para funcionar. El espacio de código se ha configurado con la última versión de Hugo Extended. Simplemente ejecute `hugo server` en la terminal y vea su nuevo sitio en acción.

4. En la carpeta `config` se encontran los archivos de configuración. Estos pueden editarse según las necesidades. Asegurarse de actualizar la propiedad `baseurl` en `config/_default/config.toml` con la URL del sitio que corresponda.

5. Ir a  *Settings* -> *Pages*. Cambiar el *build branch* from `master` to `gh-pages`.

![Construir/Build](https://github.com/namanh11611/hugo-theme-stack-starter/assets/16586200/12c763cd-bead-4923-b610-8788f388fcb5)

9. Una vez que se haya terminado de editar el sitio, simplemente hacer el `commit` (confirmarlo) y hacer el `push` (envíalo). *GitHub Action* (acción de GitHub) lo implementará automáticamente en la página de GitHub asociada al repositorio.
![GitHub action](https://user-images.githubusercontent.com/5889006/156916881-90b8bb9b-1925-4e60-9d7a-8026cda729bf.png)

---

Si no quieres usar *GitHub Codespace*, también se puede ejecutar la plantilla en el equipo local. **Se Necesita instalar Git, Go y Hugo Extended localmente.**

## Update theme manually

Run:

```bash
hugo mod get -u github.com/CaiJimmy/hugo-theme-stack/v3
hugo mod tidy
```

> This starter template has been configured with `v3` version of theme. Due to the limitation of Go module, once the `v4` or up version of theme is released, you need to update the theme manually. (Modifying `config/module.toml` file)

## Deploy to another static page hostings

If you want to build this site using another static page hosting, you need to make sure they have Go installed in the machine. 

<details>
  <summary>Vercel</summary>
  
You need to overwrite build command to install manually Go:

```
amazon-linux-extras install golang1.11 && hugo --gc --minify
```

![](https://user-images.githubusercontent.com/5889006/156917172-01e4d418-3469-4ffb-97e4-a905d28b8424.png)

If you are using Node.js 20, you need to overwrite the install command to install manually Go:

```
dnf install -y golang
```

![image](https://github.com/zhi-yi-huang/hugo-theme-stack-starter/assets/83860323/777c1109-dfc8-4893-9db7-1305ec027cf5)


Make sure also to specify Hugo version in the environment variable `HUGO_VERSION` (Use the latest version of Hugo extended):

![Environment variable](https://user-images.githubusercontent.com/5889006/156917212-afb7c70d-ab85-480f-8288-b15781a462c0.png)
</details>
