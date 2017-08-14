import { describe, it } from 'mocha'

import { expect } from 'chai'
import parse from '../src/parser'

describe('parser', () => {
  it('parses a true', () => {
    expect(parse('true')).to.deep.equal(true)
  })
  it('parses a false', () => {
    expect(parse('false')).to.deep.equal(false)
  })
  it('detect if then else expresions', () => {
    expect(parse('if true then true else true')).to.deep.equal({
      "condition": true,
      "branch1": true,
      "branch2": true
    });
  })

  it('fails when it should', () => {
    expect(() => parse('abc')).to.throw()
  })
})
