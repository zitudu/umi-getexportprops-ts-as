import React from 'react'

const Child1: React.FC & { menu: any } = () => <p>Child1</p>

Child1.menu = {
  name: 'Child1'
}

export default Child1
