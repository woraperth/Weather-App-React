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
`

export const RightHalf = styled.div`
  position: relative;
  width: 50%;
  height: 100vh;
  padding: 10px;
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
  text-transform: uppercase;
  
`