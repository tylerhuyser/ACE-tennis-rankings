import Axios from 'axios'
import api from './api-config'

export const getATPSinglesData = async () => {
  const resp = await api.get('/atp/rankings/singles')
  return resp.data
}

export const getATPSinglesRaceData = async () => {
  const resp = await api.get('/atp/rankings/singles-race')
  return resp.data
}

export const getATPDoublesData = async () => {
  const resp = await api.get('/atp/rankings/doubles')
  return resp.data
}

export const getATPDoublesRaceData = async () => {
  const resp = await api.get('/atp/rankings/doubles-race')
  return resp.data
}

export const getWTASinglesData = async () => {
  const resp = await api.get('/wta/rankings/singles')
  return resp.data
}

export const getWTASinglesRaceData = async () => {
  const resp = await api.get('/wta/rankings/singles-race')
  return resp.data
}

export const getWTADoublesData = async () => {
  const resp = await api.get('/wta/rankings/doubles')
  return resp.data
}

export const getWTADoublesRaceData = async () => {
  const resp = await api.get('/wta/rankings/doubles-race')
  return resp.data
}