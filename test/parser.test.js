import { describe, it } from 'mocha'

import { expect } from 'chai'
import parse from '../src/parser'

describe('parser', () => {
  it('parses an open and close tag', () => {
    expect(parse('<B></B>')).to.deep.equal({
      type: "B",
      properties: [],
      children: []
    })
  })

  it('fails with a non closed tag', () => {
    expect(() => parse('<A>')).to.throw()
  })

  it('parses a self closing tag', () => {
    expect(parse('<img />')).to.deep.equal({
      type: "img",
      properties: []
    });
  })

  it('fails with a non named tag', () => {
    expect(() => parse('</>')).to.throw()
  })

  it('fails with a non closed tag 2', () => {
    expect(() => parse('<B></A>')).to.throw()
  })

  it('fails with a non closed tag 2', () => {
    expect(parse('<A><B/><B/></A>')).to.deep.equal({
      type: "A",
      properties: [],
      children: [
        [
          {
            type: "B",
            properties: []
          },
          {
            type: "B",
            properties: []
          }
        ]
      ]
    })
  })

  it('parses a self closing tag', () => {
    expect(parse('<img src="url"></img>')).to.deep.equal({
      type: "img",
      properties: [
        {
          property: "src",
          value: "url"
        }
      ],
      children: []
    });
  })
})
