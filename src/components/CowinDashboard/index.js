// Write your code here
import {Component} from 'react'
import Loader from 'react-loader-spinner'
import VaccinationCoverage from '../VaccinationCoverage'
import VaccinationByGender from '../VaccinationByGender'
import VaccinationByAge from '../VaccinationByAge'
import './index.css'

const apiStatusConstants = {
  initial: 'INITIAL',
  success: 'SUCCESS',
  failure: 'FAILURE',
  inProgress: 'IN_PROGRESS',
}

class CowinDashboard extends Component {
  state = {
    last7DaysData: [],
    vaccineByAge: [],
    vaccinationByGender: [],
    apiStatus: apiStatusConstants.initial,
  }

  componentDidMount() {
    this.getCovidData()
  }

  getCovidData = async () => {
    this.setState({
      apiStatus: apiStatusConstants.inProgress,
    })
    const url = 'https://apis.ccbp.in/covid-vaccination-data'
    const options = {
      method: 'GET',
    }
    const response = await fetch(url, options)
    const data = await response.json()
    console.log(data)

    if (response.ok) {
      this.setState({
        last7DaysData: data.last_7_days_vaccination,
        vaccineByAge: data.vaccination_by_age,
        vaccinationByGender: data.vaccination_by_gender,
        apiStatus: apiStatusConstants.success,
      })
    } else {
      this.setState({
        apiStatus: apiStatusConstants.failure,
      })
    }
  }

  renderCovidPage = () => {
    const {last7DaysData, vaccineByAge, vaccinationByGender} = this.state
    // console.log('dashboard', last7DaysData)

    return (
      <div>
        <VaccinationCoverage last7DaysData={last7DaysData} />
        <VaccinationByGender data={vaccinationByGender} />
        <VaccinationByAge data={vaccineByAge} />
      </div>
    )
  }

  renderLoader = () => (
    <div data-testid="loader" className="loader">
      <Loader type="ThreeDots" color="#ffffff" height={80} width={80} />
    </div>
  )

  renderFailure = () => (
    <div>
      <img
        alt="failure view"
        src="https://assets.ccbp.in/frontend/react-js/api-failure-view.png"
      />
      <h1 className="failure-heading">Something Went Wrong</h1>
    </div>
  )

  renderCoWinDetails = () => {
    const {apiStatus} = this.state

    switch (apiStatus) {
      case apiStatusConstants.success:
        return this.renderCovidPage()
      case apiStatusConstants.inProgress:
        return this.renderLoader()
      case apiStatusConstants.failure:
        return this.renderFailure()
      default:
        return null
    }
  }

  render() {
    return (
      <div className="covid-dashboard-bg">
        <div className="logo-container">
          <img
            className="websiteLogo"
            alt="website logo"
            src="https://assets.ccbp.in/frontend/react-js/cowin-logo.png"
          />
          <h1 className="page-name">Co-WIN</h1>
        </div>
        <h1 className="heading">CoWIN Vaccination in India</h1>

        {this.renderCoWinDetails()}
      </div>
    )
  }
}

export default CowinDashboard
