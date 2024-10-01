import React from 'react'

const Footer = () => {
  return (
    <div>
        <footer className="dark:bg-gray-300 dark:text-gray-900">
	<div className="container flex flex-col p-4 mx-auto md:p-8  ">
		<ul className="self-center py-6  text-center  flex space-x-3 ">
			<li>Shop</li>
			<li>About</li>
			<li>Blog</li>
			<li>Pricing</li>
			<li>Contact</li>
		</ul>
	</div>
</footer>
    </div>
  )
}

export default Footer