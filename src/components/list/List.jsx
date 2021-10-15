import React from 'react'

export default function List({ setMenuOpen, item, nameItem }) {
    return (
        <div>
            <li onClick={() => setMenuOpen(false)}>
              <a href={`#${item}`}>{nameItem}</a>
            </li>
        </div>
    )
}
