const baseUrl = process.env.NODE_ENV === 'development'
  ? 'http://localhost:5500'
  : ''

export const apiBaseUrl = baseUrl
