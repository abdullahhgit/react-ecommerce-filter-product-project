import Input from '../../components/Input'
import './Colors.css'

const Colors = ({handleChange}) => {
  return (
<div className='ml'>
      <h2 className='sidebar-title-price-title'>Colors</h2>
      <label className="sidebar-label-container">
          <input type="radio" name='test3' value='' onChange={handleChange} />
          <span className="checkmark all"></span> All
        </label>

        <Input 
          handleChange={handleChange}
          name='test3' 
          value="black"
          title='Black'
          color='black'
        />
        <Input 
          handleChange={handleChange}
          name='test3' 
          value="blue"
          title='Blue'
          color='blue'
        />
        <Input 
          handleChange={handleChange}
          name='test3' 
          value="red"
          title='Red'
          color='red'
        />
        <label htmlFor='white-color' className="sidebar-label-container">
          <input type="radio" className='white-color' name="test3" value="white" onChange={handleChange} />
          <span className="checkmark" style={{background: "#fff", border: "2px solid #000"}}></span> 
          White
        </label>
    </div>
  )
}

export default Colors
