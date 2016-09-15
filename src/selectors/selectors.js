export function manufacturersFormattedForDropdown(manufacturers) {
  return manufacturers.map(manufacturer => {
    return {
      value: manufacturer.id,
      text: manufacturer.name
    };
  });
}
