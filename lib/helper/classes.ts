function scopedClassFactory(prefix: string) {
  return function(name?: string) {
    return [prefix, name].filter(Boolean).join('-');
  }
}

export { scopedClassFactory }
