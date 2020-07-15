# Ejercicios del módulo

Para superar el módulo es suficiente entregar UNA de los opciones.
Se considerará positivamente entregar ambos y es recomendable
para practicar de forma más extensa los conocimientos adquiridos.
Se valorará, no solo el resultado sino la forma de escribir el código,
incluyendo las buenas prácticas comentadas a lo largo de las clases.

## Opción 1. Ficheros y Números romanos

Partimos de un fichero con una serie de valores.
Después de leer el fichero y separar cada uno de ellos, comprobamos si son números arábigos, romanos o ninguna da ambas
Convertimos los números al sistema contrario al que vienen
Grabamos el resultado en un nuevo fichero.
Hacemos 2 versiones, con las operaciones de ficheros síncronas y asíncronas.

Símbolos

| Romano | Árabe |
| ------ | ----- |
| I      | 1     |
| V      | 5     |
| X      | 10    |
| L      | 50    |
| C      | 100   |
| D      | 500   |
| M      | 1000  |

Sólo se contemplan números entre el 1 y el 3999

- Los símbolos I, X, C y M se pueden repetir hasta tres veces.
- Los símbolos V, L y D no pueden repetirse.
- Los símbolos I, X y C se suman si están a la derecha de otro mayor o igual
- Los símbolos I, X y C se restan si están a la izquierda de otro mayor y
  solamente pueden anteponerse a los dos símbolos que les siguen en la sucesión
- I se resta de V y X
- X se resta de L y C
- C se resta de D y M
- Los símbolos V, L y D no pueden colocarse a la izquierda de otro mayor.

Crear una función para pasar de unos a otros
Utilizar un validador de números romanos

## Opción 2. Poker (OOP)

Partiendo de una baraja de 52 objetos, generamos 2 manos aleatorias
Las comparamos y establecemos la ganadora
El resultado, además de mostrarlo por consola, lo guardamos en un fichero.
Hacemos 2 versiones, con las operaciones de ficheros síncronas y asíncronas.

Una baraja de póker completa continente 52 cartas.

Cada carta se define por 2 características:

Palo (suit) que pueden ser los siguientes:

- picas/spades (S)
- corazones/hearts (H)
- tréboles/clubs (C)
- diamantes/diamonds (D)

Valor
2, 3, 4, 5, 6, 7, 8, 9, T (10/Ten), J (Jack), Q (Queen) K (King), A (1/As)

una mano es un conjunto de 5 cartas
estamos jugando con una baraja por lo que no puede haber cartas repetidas
las manos de póker se ordenan de menor a mayor dependiendo de una serie de reglas asociadas a la mano

- High Card (carta más alta): para manos que no entran en ninguna de las manos superiores el ganador es aquel que tiene la carta más alta. Si se produce un empate entonces se compara la siguiente carta más alta y así sucesivamente hasta que 1 es ganador o si empatan en todas las cartas es empate.
- Pair (pareja): Dos de las 5 cartas de la mano tienen el mismo valor. Si las dos manos tienen pareja entonces gana la que tenga la pareja más alta. Si ambas parejas son iguales entonces gana el que tenga la carta más alta.
- Two pairs (dobles parejas): la mano contiene dos parejas diferentes si las dos manos tienen dobles parejas diferentes entonces gana aquella que tenga la pareja más alta. Si las dos manos tienen las mismas parejas entonces se compara la otra pareja. Si ambos tienen las mismas parejas entonces gana el que tenga la carta más alta restante.
- Three of a kind (el trío): 3 cartas de la mano tienen el mismo valor. gana la mano que tiene las 3 cartas con mayor valor.
- Straight (escalera): la mano contiene 5 cartas consecutivas. Si las dos manos tienen escalera entonces gana la que tiene la carta mas alta.
- Flush (color): la mano tiene 5 cartas con el mismo palo. Si ambas manos tienen color entonces gana el que tenga la carta más alta.
- Full House (full): la mano tiene un trío y una pareja. E n caso de tener ambas manos full entonces gana el que tenga el trío más alto.
- Four of a kind (póker): 4 cartas del mismo valor. En caso de tener ambas manos póker gana el que tenga el valor más alto.
- Straight Flash (escalera de color): 5 cartas con el mismo palo pero con valores consecutivos en caso de tener escaleras las 2 manos entonces gana el que tenga el valor más alto.

Entrada: Jugador I: 2H 3D 5S 9C KD Jugador 2: 2C 3H 4S 8C AH
Salida : Jugador 2 gana, carta más alta:

Entrada: Jugador 1: 2H 4S 4C 2D 4H Jugador 2: 2S 8S AS QS 3S
Salida: Jugador 1 gana, full

Entrada: Jugador I: 2H 3D 5S 9C KD Jugador 2: 2C 3H 4S 8C KH
Salida : Jugador 1 gana, carta más alta

Entrada: Jugador I: 2H 3D 5S 9C KD Jugador 2: 2D 3H 5C 9S KH
Salida : Empate
