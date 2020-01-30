// Code your solution here
function findMatching(drivers, str) {
  return drivers.filter(driver => {
    return driver.toUpperCase() === str.toUpperCase()
  })
}