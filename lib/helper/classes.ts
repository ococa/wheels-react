function scopedClassFactory(prefix: string) {
  return function(name?: string) {
    return [prefix, name].filter(Boolean).join('-');
  }
}

// interface Options {
//   extra?: Object,
//
// }
//
// interface ClassToggles {
//   [Key: string]: boolean,
// }

// function NewScopedClassFactory(prefix: string) {
//   return function (name?: string | ClassToggles, options?: Options) {
//     let name2;
//     let result =  [prefix, name2].filter(Boolean).join('-');
//     if (typeof name === 'string' || name === undefined) {
//       name2 = name;
//       result =  [prefix, name2].filter(Boolean).join('-');
//     } else {
//       name2 = Object.entries(name).filter(kv => kv[1]).map(kv => kv[0]);
//       result = name2.map(n => {
//         [prefix, n].filter(Boolean).join('-')
//       })
//     }
//   }
// }

export { scopedClassFactory }
