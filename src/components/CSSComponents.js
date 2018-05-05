import React from 'react'
import styled from "styled-components";

export const PageWrapper = styled.div`
  display: flex;
`

export const LeftHalf = styled.div`
  position: relative;
  width: 50%;
  height: 100vh;
  background: #ccc;
  
  @media (max-width: 1000px) {
    width: 100%;
  }
`

export const RightHalf = styled.div`
  position: relative;
  width: 50%;
  height: 100vh;
  padding: 0.5% 2%;
  box-sizing: border-box;

  @media (max-width: 1000px) {
    width: 100%;
  }
`

export const SelectorWrapper = styled.div`
`

export const SelectorItem = styled.div`
  display: inline-block;
  cursor: pointer;
  padding: 5px;
  border: '#666';
  background: ${props => props.active ? '#666' : '#fff'};
  color: ${props => props.active ? '#fff' : '#666'};
  border-radius: 5px;
  margin-right: 10px;
  margin-bottom: 5px;

  &:hover {
      color: ${props => props.active ? '#fff' : '#007a47'};
      border-color: #007a47;
  }
`

export const FullScreenBox = styled.div`
  position: absolute;
  left: 0;
  right: 0;
  top: 0;
  bottom: 0;
  background: url(${props => props.url}) no-repeat;
  background-size: cover;
`

export const PageTitle = styled.h1`
  font-size: 90px;
  margin-top: 10px;
  margin-bottom: 0;
  text-transform: uppercase; 

  @media (max-width: 1200px) {
    font-size: 80px;
  }

  @media (max-width: 1000px) {
    font-size: 60px;
  }
`

export const Subtitle = styled.h2`
  margin-top: 40px;
`

export const ChartWrapper = styled.div`
  margin-right: 100px;
`

export const WeatherTemp = styled.span`
  font-size: 60px;
  color: #007a47;
`

export const WeatherDescr = styled.div`
  font-size: 20px;
  color: #666;
`