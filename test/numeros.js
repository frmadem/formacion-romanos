const {expect} = require("chai");

const conversor = require("../lib/conversor.js");

describe("El conversor...", function(){


    it("convierte correctamente números romanos de unidad", function(){
    
        expect(conversor(1)).to.equal("I");
        expect(conversor(5)).to.equal("V");
        expect(conversor(10)).to.equal("X");
    

        expect(conversor(2)).to.equal("II");
        expect(conversor(3)).to.equal("III");
        expect(conversor(4)).to.equal("IV");

        expect(conversor(9)).to.equal("IX");

    })

    it("convierte correctamente números romanos de decena", function(){
    

        expect(conversor(20)).to.equal("XX");
        expect(conversor(30)).to.equal("XXX");

        expect(conversor(33)).to.equal("XXXIII");
        expect(conversor(34)).to.equal("XXXIV");

        expect(conversor(89)).to.equal("LXXXIX");
    
    })

    it("convierte correctamente números romanos de centena", function(){

        expect(conversor(200)).to.equal("CC");

        expect(conversor(500)).to.equal("D")

        expect(conversor(989)).to.equal("CMLXXXIX")

    })

    it("convierte correctamente números romanos de millares", function(){

        expect(conversor(1000)).to.equal("M");
        expect(conversor(1500)).to.equal("MD");
    
        expect(conversor(2944)).to.equal("MMCMXLIV")

        expect(conversor(3999)).to.equal("MMMCMXCIX")
    
    })

})
