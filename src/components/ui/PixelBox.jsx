const PixelBox = ({ children, className = '', color = 'gold', title }) => {
  const borderColors = {
    gold: 'border-pixel-gold shadow-pixel-gold',
    blue: 'border-pixel-blue shadow-pixel-blue',
    green: 'border-pixel-green shadow-pixel-green',
    red: 'border-pixel-red shadow-pixel-red',
    purple: 'border-pixel-purple shadow-pixel-purple',
  }

  return (
    <div className={`pixel-box ${borderColors[color]} ${className}`}>
      {title && (
        <div className="pixel-box-title">
          <span>{title}</span>
        </div>
      )}
      <div className="pixel-box-content">{children}</div>
    </div>
  )
}

export default PixelBox
