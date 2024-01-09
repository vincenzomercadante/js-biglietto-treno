# JS-BIGLIETTO TRENO

## TRACCIA

Il programma dovrà chiedere all'utente il numero di chilometri che vuole percorrere e l'età del passeggero.
Sulla base di queste informazioni dovrà calcolare il prezzo totale del viaggio, secondo queste regole:

- il prezzo del biglietto è definito in base ai km (0.21 € al km)
- va applicato uno sconto del 20% per i minorenni
- va applicato uno sconto del 40% per gli over 65

L'output del prezzo finale va messo fuori in forma umana (con massimo due decimali, per indicare centesimi sul prezzo). Questo richiederà un minimo di ricerca.

## RISOLUZIONE

1. Chiedo all'utente il numero di chilometri che desidera percorrere
2. Chiedo all'utente l'età del passeggero.
3. Calcolo il prezzo del biglietto che dovrà essere approssimato ai centesimi
   - moltiplico i chilometri per 0.21
   - se è minorenne applico lo sconto del 20%
   - se invece è un over 65 applico lo sconto del
