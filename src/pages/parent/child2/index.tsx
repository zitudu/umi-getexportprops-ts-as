import React from 'react'

const Child2: React.FC & { menu: any } = () => <p>Child2</p>

Child2.menu = {
  name: 'Child2'
}

export default Child2
