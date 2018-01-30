var SpellCreator = (function () {

    let that = {};



    function combineSpell(baseSpell, modifierA, modifierB, secondarySpell) {

    }

    that.combineSpell = combineSpell;

    return that;
})();


/*
* SPELL Syntax
* {
*   element: e.g. fire,
*   baseDamage: 100,
*   legalTarget: friend/enemy/self/all,
*   modifierA: none/splash/rebound/proc/dot/overload,
*   modifierB: none/splash/rebound/proc/dot/overload,
*   secondarySpell: baseSpell,
*
*
* */

function Spell(options) {

    let that = {},
        element = options.element,
        baseDamage = options.baseDamage,
        legalTarget = options.legalTarget,
        modifierA = options.modifierA,
        modifierB = options.modifierB,
        secondarySpell = options.secondarySpell;

    function cast(options) {
        let castTime = options.castTime,
            spell = {};

        

        return spell;
    }
    

}

let modifiers = {
    splash: {
        damageMulti: 1.0,

    },
    rebound: {
        damageMulti: 0.5,
    },
    proc: {
        damageMulti: 1.0,

    },
    dot : {
        damageMulti: 0.2,
    },
    overload : {

    }
    };