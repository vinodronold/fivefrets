const chord = {
  1: `A`,
  2: `B\u266D`,
  3: `B`,
  4: `C`,
  5: `C\u266F`,
  6: `D`,
  7: `D\u266F`,
  8: `E`,
  9: `F`,
  10: `F\u266F`,
  11: `G`,
  12: `G\u266F`,
  13: `N`
}

const type = {
  1: '' /* Major */,
  2: 'm' /* Minor */
}
/**
 * shape {
 *  chord{
 *    type: {
 *      b: barre
 *      p: [string6,string2,string3,string4,string5,string1]
 *    }   
 *  }
 * }
 */
const barre_common_E_shape = s => ({
  1: {
    b: 1,
    s,
    p: [0, 3, 3, 2, 0, 0]
  },
  2: {
    b: 1,
    s,
    p: [0, 3, 3, 0, 0, 0]
  }
})

const barre_common_A_shape = s => ({
  1: {
    b: 1,
    s,
    p: [0, 0, 3, 3, 3, 0]
  },
  2: {
    b: 1,
    s,
    p: [0, 0, 3, 3, 2, 0]
  }
})

const shape = {
  1: {
    1: {
      b: 0,
      p: [0, 0, 2, 2, 2, 0]
    },
    2: {
      b: 0,
      p: [0, 0, 2, 2, 1, 0]
    }
  },
  2: barre_common_A_shape(1),
  3: barre_common_A_shape(2),
  4: {
    1: {
      b: 0,
      p: [0, 3, 2, 0, 1, 0]
    },
    2: {
      b: 1,
      s: 3,
      p: [0, 0, 3, 3, 2, 0]
    }
  },
  5: barre_common_A_shape(4),
  6: {
    1: {
      b: 0,
      p: [0, 0, 0, 2, 3, 2]
    },
    2: {
      b: 0,
      p: [0, 0, 0, 2, 3, 1]
    }
  },
  7: barre_common_A_shape(6),
  8: {
    1: {
      b: 0,
      p: [0, 2, 2, 1, 0, 0]
    },
    2: {
      b: 0,
      p: [0, 2, 2, 0, 0, 0]
    }
  },
  9: barre_common_E_shape(1),
  10: barre_common_E_shape(2),
  11: {
    1: {
      b: 0,
      p: [3, 2, 0, 0, 3, 3]
    },
    2: {
      b: 1,
      s: 3,
      p: [0, 3, 3, 0, 0, 0]
    }
  },
  12: barre_common_E_shape(4)
}

const Transpose = (c, xpose) => {
  let _c = c + xpose % 12
  _c = _c <= 0 ? _c + 12 : _c
  _c = _c > 12 ? _c % 12 : _c
  return _c
}

const GetChordName = (c, t = 1, xpose = 0) => {
  if (!c) {
    return ''
  }
  if (c === 13) {
    return chord[c]
  }
  return `${chord[Transpose(c, xpose)]}${type[t]}`
}

const GetChordShape = (c, t = 1, xpose = 0) => shape[Transpose(c, xpose)][t]

export { GetChordName, GetChordShape }
