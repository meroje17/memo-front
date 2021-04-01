export const initialValue = (isMobile) => {
  return {
    nbCase: 4,
    caseSize: formatSize("40", isMobile),
    repeat: 2,
    level: 1,
    score: 0,
  };
};

export const actions = (isMobile) => {
  return {
    addPoint: { type: "ADD_POINT", isMobile },
    changeLevel: { type: "CHANGE_LEVEL", isMobile },
    reset: { type: "RESET", isMobile },
    updateSize: { type: "UPDATE_SIZE", isMobile }
  };
};

export const levels = (isMobile, level) => {
  const object = {
    1: {
      case: 4,
      repeat: 2,
      size: formatSize("40", isMobile),
    },
    2: {
      case: 4,
      repeat: 3,
      size: formatSize("40", isMobile),
    },
    3: {
      case: 4,
      repeat: 4,
      size: formatSize("40", isMobile),
    },
    4: {
      case: 4,
      repeat: 5,
      size: formatSize("40", isMobile),
    },
    5: {
      case: 9,
      repeat: 2,
      size: formatSize("25", isMobile),
    },
    6: {
      case: 9,
      repeat: 3,
      size: formatSize("25", isMobile),
    },
    7: {
      case: 9,
      repeat: 4,
      size: formatSize("25", isMobile),
    },
    8: {
      case: 9,
      repeat: 5,
      size: formatSize("25", isMobile),
    },
    9: {
      case: 16,
      repeat: 2,
      size: formatSize("20", isMobile),
    },
    10: {
      case: 16,
      repeat: 3,
      size: formatSize("20", isMobile),
    },
    11: {
      case: 16,
      repeat: 4,
      size: formatSize("20", isMobile),
    },
    12: {
      case: 16,
      repeat: 5,
      size: formatSize("20", isMobile),
    },
    13: {
      case: 25,
      repeat: 2,
      size: formatSize("16", isMobile),
    },
    14: {
      case: 25,
      repeat: 3,
      size: formatSize("16", isMobile),
    },
    15: {
      case: 25,
      repeat: 4,
      size: formatSize("16", isMobile),
    },
    16: {
      case: 25,
      repeat: 5,
      size: formatSize("16", isMobile),
    },
    17: {
      case: 36,
      repeat: 2,
      size: formatSize("13", isMobile),
    },
    18: {
      case: 36,
      repeat: 3,
      size: formatSize("13", isMobile),
    },
    19: {
      case: 36,
      repeat: 4,
      size: formatSize("13", isMobile),
    },
    20: {
      case: 36,
      repeat: 5,
      size: formatSize("13", isMobile),
    },
    21: {
      case: 49,
      repeat: 2,
      size: formatSize("11", isMobile),
    },
    22: {
      case: 49,
      repeat: 3,
      size: formatSize("11", isMobile),
    },
    23: {
      case: 49,
      repeat: 4,
      size: formatSize("11", isMobile),
    },
    24: {
      case: 49,
      repeat: 5,
      size: formatSize("11", isMobile),
    },
    25: {
      case: 49,
      repeat: 6,
      size: formatSize("11", isMobile),
    },
    26: {
      case: 49,
      repeat: 7,
      size: formatSize("11", isMobile),
    },
    27: {
      case: 49,
      repeat: 8,
      size: formatSize("11", isMobile),
    },
    28: {
      case: 49,
      repeat: 9,
      size: formatSize("11", isMobile),
    },
    29: {
      case: 49,
      repeat: 10,
      size: formatSize("11", isMobile),
    },
    30: {
      case: 49,
      repeat: 11,
      size: formatSize("11", isMobile),
    },
    31: {
      case: 49,
      repeat: 12,
      size: formatSize("11", isMobile),
    },
    32: {
      case: 49,
      repeat: 13,
      size: formatSize("11", isMobile),
    },
    33: {
      case: 49,
      repeat: 14,
      size: formatSize("11", isMobile),
    },
    34: {
      case: 49,
      repeat: 15,
      size: formatSize("11", isMobile),
    },
    35: {
      case: 49,
      repeat: 16,
      size: formatSize("11", isMobile),
    },
  };

  return object[level];
};

function formatSize(number, isMobile) {
    const heightOrWidth = isMobile ? "vw" : "vh";
    const size = number + heightOrWidth;
    return size;
}
