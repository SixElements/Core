const ELEMENTS = {
    FIRE: {
        variation: {Int: 1,Bal: -1,Pow: 0,Vit: -2,Agi:0,Lck:2},
        method: "trigger"
    },
    WATER: {
        variation: {Int: -1,Bal: 2,Pow: 0,Vit: 0,Agi:1,Lck:-2},
        method: "channel"
    },
    GROWTH: {
        variation: {Int: -2,Bal: 1,Pow: 0,Vit: 2,Agi:-1,Lck:0},
        method: "charge"
    },
    DECAY: {
        variation: {Int: 2,Bal: -2,Pow: 0,Vit: 1,Agi:0,Lck:-1},
        method: "repeat"
    },
    AIR: {
        variation: {Int: 1,Bal: 0,Pow: -2,Vit: -1,Agi:2,Lck:0},
        method: "splash"
    },
    EARTH: {
        variation: {Int: -1,Bal: 0,Pow: 2,Vit: 1,Agi:-2,Lck:0},
        method: "overload"
    }
};

const STATS = {
    getDerived: function (obj) {
        return {
            accuracy:   50 +    (obj._int*2 + obj._agi),
            power:      3 *     (obj._pow*2 + obj._bal),
            speed:              (obj._agi*2 + obj._int) /20,
            crit:       1.5 *   (obj._lck*2 + obj._agi),
            element:    5 *     ((obj._bal*2 + obj._vit + obj._int)*3/4),
            elementReg:         (obj._bal*2 + obj._vit) /20,
            health:     4 *     (obj._vit*2 + obj._pow),
            healthReg:          (obj._vit*2 + obj._agi) /5,
            evasion:    1.5 *   (obj._agi*2 + obj._lck)
        };
    }



};