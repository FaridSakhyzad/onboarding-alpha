'use client';

import React, { useState } from 'react';
import { useRouter } from 'next/navigation';

import Image from 'next/image';

import Select, { SelectChangeEvent } from '@mui/material/Select';
import FormControl from '@mui/material/FormControl';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import Chip from '@mui/material/Chip';

import Header from '@/app/components/header';
import AsideImage from '@/app/components/asideImage/AsideImage';

import '../layouts.scss';
import './styles.scss';

export default function CreateOrganisation() {
  const router = useRouter();

  const [ currentCategories, setCurrentCategories ] = useState<string[]>([]);

  const names = [
    'Oliver Hansen',
    'Van Henry',
    'April Tucker',
    'Ralph Hubbard',
    'Omar Alexander',
    'Carlos Abbott',
    'Miriam Wagner',
    'Bradley Wilkerson',
    'Virginia Andrews',
    'Kelly Snyder',
  ];

  const handleCategoriesChange = (event: SelectChangeEvent<typeof names>) => {
    const {
      target: { value },
    } = event;

    setCurrentCategories(typeof value === 'string' ? value.split(',') : value);
  }

  const handleCategoryChipDelete = (e: React.SyntheticEvent, value: string) => {
    const rest = currentCategories.filter(item => item !== value);

    setCurrentCategories(rest);
  }

  const [ email, setEmail ] = useState('');
  const [ isEmailValid, setIsEmailValid ] = useState(false);

  const [ orgName, setOrgName ] = useState('');
  const [ employeesAmount, setEmployeesAmount ] = useState('');
  const [ iAgree, setIAgree ] = useState(false);

  const validateEmail = (string: string) => /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/.test(string);

  const handleEmailChange = (e: React.SyntheticEvent) => {
    const { value } = e.target as HTMLInputElement || {};

    setEmail(value);

    setIsEmailValid(validateEmail(value));
  }

  const handleOrgNameChange = (e: React.SyntheticEvent) => {
    const { value } = e.target as HTMLInputElement || {};

    setOrgName(value);
  }

  const handleEmployeesAmountChange = (e: React.SyntheticEvent) => {
    const { value } = e.target as HTMLSelectElement || {};

    setEmployeesAmount(value);
  }

  const handleIAgreeChange = (e: React.SyntheticEvent) => {
    const { checked } = e.target as HTMLInputElement || {};

    setIAgree(checked);
  }

  const isFormValid = () => {
    return orgName.length > 0 && iAgree && isEmailValid;
  }

  const handleContinueButtonClick = (e: React.SyntheticEvent) => {
    e.preventDefault();

    const data = {
      email,
      orgName,
      employeesAmount,
      currentCategories,
    }

    router.push('/organizations', { scroll: false })
  }

  return (
    <div className="container">
      <div className="layout1">
        <Header />
        <main className="main">
          <div className="createOrg">
            <h2 className="createOrgTitle">Create Your Organization</h2>
            <div className="createOrg-text">
              <p className="createOrgPara">Enter details of your organization</p>
            </div>
            <form className="createOrgForm">
              <div className="createOrgForm-row">
                <div className="createOrgForm-uploadPhoto">
                  <div className="createOrgForm-uploadPhotoPreview">
                    <Image
                      className="createOrgForm-uploadPhotoPreviewImg"
                      src="/img--org-1.jpg"
                      width={64}
                      height={64}
                      alt="Organization 1"
                    />
                  </div>
                  <div className="createOrgForm-uploadPhotoInputBox">
                    <div className="createOrgForm-uploadPhotoInputTitle">Upload Photo</div>
                    <input type="file" className="createOrgForm-uploadPhotoInput" />
                  </div>
                </div>
              </div>

              <div className="createOrgForm-row">
                <div className="formInput">
                  <div className="formInput-header">
                    <label className="formInput-label">E-mail<i className="formInput-asterisk">*</i></label>
                  </div>
                  <div className="formInput-content">
                    <i className="formInput-leftIcon createOrgForm-emailIcon" />
                    <input
                      type="text"
                      className="input formInput-input"
                      placeholder="mike@company.com"
                      value={email}
                      onChange={handleEmailChange}
                    />
                  </div>
                </div>
              </div>

              <div className="createOrgForm-row">
                <div className="formInput">
                  <div className="formInput-header">
                    <label className="formInput-label">Organization Name<i className="formInput-asterisk">*</i></label>
                  </div>
                  <div className="formInput-content">
                    <input
                      type="text"
                      className="input formInput-input"
                      placeholder="Enter Name"
                      value={orgName}
                      onChange={handleOrgNameChange}
                    />
                  </div>
                </div>
              </div>

              <div className="createOrgForm-row">
                <div className="formInput">
                  <div className="formInput-header">
                    <label className="formInput-label">Employees Amount</label>
                  </div>
                  <div className="formInput-content">
                    <div className="custom-select">
                      <select
                        className="select"
                        defaultValue={employeesAmount}
                        onChange={handleEmployeesAmountChange}
                      >
                        <option value=""></option>
                        <option value="1-5">1-5</option>
                        <option value="5-50">5-50</option>
                        <option value="50-200">50-200</option>
                      </select>
                    </div>
                  </div>
                </div>
              </div>

              <div className="createOrgForm-row">
                <FormControl classes={{
                  root: 'mui-formInput'
                }}>
                  <InputLabel shrink>Organization Categories</InputLabel>
                  <Select
                    placeholder="Select Organisation"
                    classes={{
                      root: 'muiSelect'
                    }}
                    multiple
                    value={currentCategories}
                    onChange={handleCategoriesChange}
                    renderValue={(selected) => (
                      <div className="muiSelect-chipBox">
                        {selected.map((value) => (
                          <Chip
                            classes={{
                              root: 'muiSelect-chip'
                            }}
                            key={value}
                            label={value}
                            onDelete={(e) => handleCategoryChipDelete(e, value)}
                            deleteIcon={
                              <i
                                className="muiSelect-chipDeleteIcon"
                                onMouseDown={(e) => e.stopPropagation()}
                              />
                            }
                          />
                        ))}
                      </div>
                    )}
                  >
                    {names.map((name) => (
                      <MenuItem
                        key={name}
                        value={name}
                      >
                        {name}
                      </MenuItem>
                    ))}
                  </Select>
                </FormControl>
              </div>
              <div className="createOrgForm-row">
                <label className="checkbox">
                  <input
                    type="checkbox"
                    className="checkbox-control"
                    checked={iAgree}
                    onChange={handleIAgreeChange}
                  />
                  <i className="checkbox-icon" />
                  <span className="checkbox-text">I agree with <a href="">Terms and Conditions</a></span>
                </label>
              </div>
              <div className="createOrgForm-row">
                <button
                  type="submit"
                  className="button createOrgForm-submit"
                  disabled={!isFormValid()}
                  onClick={handleContinueButtonClick}
                >Continue</button>
              </div>
            </form>
          </div>
        </main>
        <AsideImage />
      </div>
    </div>
  )
}