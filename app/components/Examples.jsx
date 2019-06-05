var React = require('react');
var {Link} = require('react-router')

var Examples = (props) => {
  return (
    <div>
<h1 className="text-center">Examples</h1>
<p>Here are some example locations to try the app</p>
<ol>
  <li>
    <Link to='/?location=Gary'>Gary, IN</Link>
  </li>
  <li>
    <Link to='/?location=Toronto'>Toronto, ON, Canada</Link>
  </li>
</ol>
    </div>
    
  )
}

module.exports = Examples;
