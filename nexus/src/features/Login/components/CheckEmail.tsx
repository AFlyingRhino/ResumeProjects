import { useTranslation } from "react-i18next"
import { IoMailOutline } from "react-icons/io5"

export function CheckEmail() {
  const { t, i18n } = useTranslation()
  return (
    <div className='d-flex justify-content-center bg-light align-items-center my-5'>
      <div className=' col-10 col-sm-8 col-md-7 col-lg-6 col-xl-5 col-xxl-4 col-xxxl-3 bg-dark rounded text-light p-5'>
        <div className="fs-2 fw-light d-flex align-items-center" >
          <IoMailOutline style={{marginRight: "10px"}}/> 
          {t('checkEmail.title')}
        </div>
        <p className='mt-5'>{t('checkEmail.text')}</p>
      </div>
    </div>
  )
}