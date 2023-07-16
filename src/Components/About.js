import React from 'react'
import Container from './Container'
import drImage from './dr.Amit.jpeg'
import './About.css'

export default function About() {
  return (
     <>
     <Container>
      <div className="row">
        <div className="col-8 py-3 py-md-5">
           <h2 className=' bg-dark text-center text-danger font-weight-bold'>Bihar Cancer Surgical</h2>
              <p className=' lead text-muted' >Welcome to Bihar Cancer Surgical (BCS), a premier medical institution founded and led by Dr. Amit Kumar, an esteemed oncologist with extensive qualifications and experience. Driven by a passion for providing exceptional cancer care, Dr. Amit Kumar has established BCS as a center of excellence in the field of oncology. <br/>

                At BCS, we specialize in comprehensive cancer treatment with a particular focus on surgical interventions. Dr. Amit Kumar, with his impressive credentials including MBBS, MS, and MCH, brings a wealth of knowledge and expertise to the practice. As a highly skilled oncosurgeon, he has dedicated his career to improving the lives of cancer patients through state-of-the-art surgical techniques and compassionate care.<br/>

                Under the guidance of Dr. Amit Kumar, BCS has become a trusted name in cancer care in Bihar and beyond. With a patient-centric approach, we strive to provide personalized treatment plans tailored to each individual's unique needs. Our team of dedicated professionals is committed to offering the highest standard of care, ensuring that every patient receives the attention, support, and expertise they deserve.<br/>

                Dr. Amit Kumar's previous role as the Head of Department (HOD) at Mahavir Cancer Sansthan, Patna, further demonstrates his commitment to advancing cancer treatment and care. His invaluable experience at Mahavir Cancer Sansthan has enriched his understanding of the complexities of cancer and strengthened his resolve to make a difference in the lives of patients.<br/>

                If you or your loved one is seeking expert cancer care, we invite you to experience the exceptional services at Bihar Cancer Surgical. Together, we can fight against cancer and provide hope and healing to those in need.
              </p>
        </div>

        <div className='col-lg-4  pl-lg-5 py-lg-5 pb-3 font-weight-bold lead text-muted'>
            <img id='drAmit' src={drImage} alt="Dr.Amit" />
            <h3 className='text-danger'>Dr. Amit Kumar</h3>
             <h5 className='text-danger'>MBBS,MS,MCh.(Oncosurgury)<br/>(Thoraco Laproscopic cancer surgeon)</h5>
        </div>

      </div>
      
        
     </Container>
     </>
  )
}
