# Detect Lang Server
Detect a lang from a string in NodeJS.

The script is a NodeJS API using a node module called [Franc](https://github.com/wooorm/franc) to detect toot language, he return a JSON array.


## Endpoint
<table>
	<thead>
		<tr>
			<th>Endpoint</th>
			<th>Purpose</th>
			<th>Data?</th>
			<th>Get/Post/Delete</th>
		</tr>
	</thead>
	<tbody>
		<tr>
			<td>/lang/{phrase}</td>
			<td>Get lang detected</td>
			<td>{"lang": "ISO FORMAT LANG"}</td>
			<td>GET</td>
		</tr>
	</tbody>
</table>

##  Install

```
git init
git clone https://github.com/arthurlacoste/detect-lang-server
cd detect-lang-server
npm install
node app
```

## Install on Docker
```
docker build -t art/detect-lang-server github.com/arthurlacoste/detect-lang-server
docker run -p 8080:1337 -d art/detect-lang-server
```
	
[Demo here](https://obscure-fjord-89228.herokuapp.com/lang/obrigado)

## Main project
This nodeJS server is a part of [Mastodon Lang Remover](https://github.com/arthurlacoste/mastodon-lang-remover), but you can run it for your own needs.

## Changelog

### 1.0.0
- Using Franc instead of Google Translate API
### 0.1.1
- Initial commit