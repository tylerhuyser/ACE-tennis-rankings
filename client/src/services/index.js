import Axios from 'axios'
import api from './api-config'

export const getATPSinglesData = async () => {
  const resp = await api.get('/atp/rankings/singles')
  return resp.data.rankings
}

export const getATPSinglesRaceData = async () => {
  const resp = await api.get('/atp/rankings/singles-race')
  return resp.data.rankings
}

export const getATPDoublesData = async () => {
  const resp = await api.get('/atp/rankings/doubles')
  return resp.data.rankings
}

export const getATPDoublesRaceData = async () => {
  const resp = await api.get('/atp/rankings/doubles-race')
  return resp.data.rankings
}

export const getWTASinglesData = async () => {
  const resp = await api.get('/wta/rankings/singles')
  return resp.data.rankings
}

export const getWTASinglesRaceData = async () => {
  const resp = await api.get('/wta/rankings/singles-race')
  return resp.data.rankings
}

export const getWTADoublesData = async () => {
  const resp = await api.get('/wta/rankings/doubles')
  return resp.data.rankings
}

export const getWTADoublesRaceData = async () => {
  const resp = await api.get('/wta/rankings/doubles-race')
  return resp.data.rankings
}