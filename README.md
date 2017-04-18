# Detect Lang Server
Detect a lang from a string in NodeJS.

The script is a NodeJS API using Google Translate API to detect toot langage, he return a JSON array.


### Endpoint
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

[Demo here](https://obscure-fjord-89228.herokuapp.com/lang/obrigado)
