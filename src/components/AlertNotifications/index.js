// Write your code here
import {Component} from 'react'
import {AiFillCheckCircle} from 'react-icons/ai'
import {RiErrorWarningFill} from 'react-icons/ri'
import {MdWarning, MdInfo} from 'react-icons/md'
import Notification from '../Notification'
import './index.css'

class AlertNotifications extends Component {
  render() {
    return (
      <div className="app-container">
        <h1 className="heading">Alert Notifications</h1>
        <Notification>
          <div className="symbol-para-container">
            <AiFillCheckCircle className="success-symbol" />
            <div className="para-container">
              <h1 className="success-heading">Success</h1>
              <p className="description">
                You can access all the files in the folder
              </p>
            </div>
          </div>
        </Notification>
        <Notification>
          <div className="symbol-para-container">
            <RiErrorWarningFill className="error-symbol" />
            <div className="para-container">
              <h1 className="error-heading">Error</h1>
              <p className="description">
                Sorry, you are not authorized to have access to delete the file
              </p>
            </div>
          </div>
        </Notification>
        <Notification>
          <div className="symbol-para-container">
            <MdWarning className="warning-symbol" />
            <div className="para-container">
              <h1 className="warning-heading">Warning</h1>
              <p className="description">
                Viewers of this file can see comments and suggestions
              </p>
            </div>
          </div>
        </Notification>
        <Notification>
          <div className="symbol-para-container">
            <MdInfo className="info-symbol" />
            <div className="para-container">
              <h1 className="info-heading">Info</h1>
              <p className="description">
                Anyone on the internet can view these files
              </p>
            </div>
          </div>
        </Notification>
      </div>
    )
  }
}

export default AlertNotifications
