|------------------------------------|
|                                    |
|         GIUDA UTILIZZO API         |
|                                    |
|------------------------------------|

Questa API espone la rotta `/bacheca` che ti permette di ottenere una lista di post filtrata in base a diversi parametri passati tramite la query string.

## Base URL:
Il server è in esecuzione su `http://localhost:3000`, quindi la rotta completa sarà: http://localhost:3000/bacheca


## Parametri di Filtraggio:
Puoi passare uno o più parametri nella query string per filtrare i post.


### 1. **Filtrare per `tag`**:
Filtra i post in base al tag associato al post. I tag sono un array di stringhe e puoi cercare post che contengono un determinato tag.

**Esempio di chiamata**: http://localhost:3000/bacheca?tag=dolci

**Risultato**: Restituirà tutti i post che contengono il tag "dolci".


### 2. **Filtrare per `titolo`**:
Filtra i post in base al titolo. La ricerca è case-insensitive, quindi non importa se scrivi maiuscole o minuscole.

**Esempio di chiamata**: http://localhost:3000/bacheca?titolo=ciambellone

**Risultato**: Restituirà tutti i post che nel titolo contengono la parola "ciambellone".


### 3. **Filtrare per `id`**:
Filtra i post in base al loro `id`. L'id è un numero intero che identifica un post specifico.

**Esempio di chiamata**: http://localhost:3000/bacheca?id=1

**Risultato**: Restituirà il post con `id` uguale a 1.


### 4. **Combinare più filtri**:
Puoi combinare più parametri per una ricerca più specifica. Ad esempio, puoi filtrare per `tag` e `titolo` contemporaneamente.

**Esempio di chiamata**: http://localhost:3000/bacheca?tag=dolci&titolo=ciambellone

**Risultato**: Restituirà tutti i post che contengono il tag "dolci" e nel titolo la parola "ciambellone".


### 5. **Filtrare per `tag`, `titolo` e `id`**:
Puoi anche combinare tutti i filtri. Ad esempio, se vuoi cercare per `tag`, `titolo` e `id`, basta passarli nella query string.

**Esempio di chiamata**: http://localhost:3000/bacheca?tag=dolci&titolo=ciambellone&id=1

**Risultato**:
Restituirà il post con `id = 1`, che contiene il tag "dolci" e nel titolo la parola "ciambellone".


### 6. **Risposta dell'API**:
L'API risponde con un oggetto JSON che contiene:
- **`totalCount`**: Il numero totale di post che soddisfano i criteri di ricerca.
- **`data`**: Un array contenente i post che corrispondono ai filtri.

#### Esempio di risposta: 
{ "totalCount": 1, "data": [ { "id": 1, "titolo": "Ciambellone classico", "contenuto": "Un dolce soffice e profumato...", "immagine": "/img/ciambellone.jpg", "tags": ["dolci", "colazione", "merenda", "tradizione"] } ] }

### Errori:
Se non vengono trovati post che soddisfano i criteri di ricerca, la risposta conterrà:
{ "totalCount": 0, "data": [] }

--------------------------------------------------

### Nota:
- La ricerca per `titolo` è case-insensitive, quindi non importa se scrivi lettere maiuscole o minuscole.
- La ricerca per `id` è esatta (deve corrispondere esattamente all'id del post).
- Se non fornisci alcun parametro nella query string, il server restituirà tutti i post.

## Test:

Esempi di URL
1. `http://localhost:3000/bacheca` (tutti i post)
2. `http://localhost:3000/bacheca?tag=dolci` (post con tag "dolci")
3. `http://localhost:3000/bacheca?titolo=ciambellone` (post con titolo "ciambellone")
4. `http://localhost:3000/bacheca?id=1` (post con id 1)
5. `http://localhost:3000/bacheca?tag=dolci&titolo=ciambellone` (post con tag "dolci" e titolo "ciambellone")






