# Instalando o Mercurial #
  * Baixar e instalar o Python 2.4 = http://www.python.org/<br />
  * Baixar e instalar o mercurial = http://mercurial.selenic.com/<br />

# Clonando o projeto #
  * Usando o prompt de comando vá até o diretório onde pretende colocar o projeto ex.: c:\projetos
  * digite o seguinte comando:
> > hg clone https://megaman-web.googlecode.com/hg/ megaman-web
  * Vai ser criada uma pasta dentro de c:\projetos com o nome megaman-web e contendo todos os arquivos do projeto.

# Configurando dados para comitar as alterações #

  * Acesse o arquivo c:\projetos\megaman-web\.hg\hgrc
  * Adicione as seguintes linhas ao arquivo:
> > `[`ui`]`<br />
> > username = Nome Sobrenome <meuemail@gmail.com><br />
> > verbose = True

# Removendo arquivos #

  * hg remove NOMEDOARQUIVO (obs.: remove do projeto e exclui o arquivo do disco)

# Adicionando arquivos #

  * hg add NOMEDOARQUIVO

# Renomear arquivos #

  * hg rename NOMEANTIGO NOMENOVO

# Verificando as alterações que você fez #

  * hg status

# Upload da nova versão #

  * primeiro você deve executar o seguinte comando: hg commit
  * o sistema irá pedir para comentar as alterações, faça isso, depois digite: hg push
  * Você será solicitado um usuário que é o usuário do gmail
  * Em seguida será solicitada uma senha que é a do Google Code, está senha se encontra nesta página: https://code.google.com/hosting/settings