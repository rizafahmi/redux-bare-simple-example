import {expect} from 'chai'

import counter from '../counter.js'

describe("Redux Counter", () => {
  it("returns 1 if we do increment", () => {
    expect(counter(0, {type: 'INCREMENT'})).to.equal(1)
  })
  it("returns 2 if we do increment from 1", () => {
    expect(counter(1, {type: 'INCREMENT'})).to.equal(2)
  })
  it("returns 1 if we do decrement from 2", () => {
    expect(counter(2, {type: 'DECREMENT'})).to.equal(1)
  })

  it("returns 0 if we do decrement from 1", () => {
    expect(counter(1, {type: 'DECREMENT'})).to.equal(0)
  })
})
