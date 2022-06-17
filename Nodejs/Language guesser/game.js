import {franc, francAll} from 'franc'
import langs from 'langs'
import {argv} from 'process'
let isoCode = franc(argv.splice(2)[0])
console.log(langs.where("3",isoCode).name);