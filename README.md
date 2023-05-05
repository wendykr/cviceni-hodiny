# Cvičení: Komponenty

Cvičení do breakrooms pro kurz JavaScript 2 od Czechitas.

## 2. Hodiny

Vytvořte si repozitář ze šablony [cviceni-hodiny](https://github.com/Czechitas-podklady-WEB/cviceni-hodiny) se stránkou zobrazující digitální hodiny. Následujte instrukce níže.

- Vytvořte komponentu `Clock`, která bude na vstupu očekávat takovýto objekt:
```javascript
{
  hours: 12,
  minutes: 34,
}
```
Komponenta nechť z takového objektu vytvoří HTML pro jedny hodiny. Jak má vypadat HTML hodin, najdete v souboru `index.html`.
- HTML kód hodin ze stránky vyjměte a nechte v ní pouze element `app`.
- Ve vašem programu vyberte element `app` a pomocí komponenty `Clock` do něj zapojte hodiny zobrazující nějaký čas.
- Pomocí funkce `Clock` vložte do stránky pod sebe několik různých hodin s různými časy.
- Vyrobte pole hodin a zobrazte je pomocí cyklu na stránce.
- Zajistěte, aby hodiny vždy zobrazovaly čas dvouciferně, tedy aby například pro čas
```javascript
{
  hours: 8,
  minutes: 5,
}
```
zobrazily čas *08:05*.
