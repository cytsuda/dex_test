# Teste da Dex

Esse é um web app criado pelo create-react-app e utilizando Parse como interpretador entre Backend e o Frontend.

Para o backend foi utilizado [Parse-server da Dex](https://gitlab.com/Carechio/teste-dexter-server), disponibilizado para o teste.

## Scripts

O pacote de `create-react-app` já disponibiliza alguns scripts.

* `npm start`: inicializa o aplicativo para desenvolvimento;
* `npm run test`: inicializa um conjunto de testes internos do pacote;
* `npm run build`: compila os arquivos e cria uma versão comprimida e minificada dos arquivos.

## Notas

O aplicativo react envia requisições para o servidor que retorna as resposta, todo controle do aplicativo é realizado por ele, o servidor apenas envia a resposta de acordo com o que foi requisitado.

Para esse aplicativo funcionar o servidor deve estar funcionando em parapelo.
