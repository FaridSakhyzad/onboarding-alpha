'use client';

import { useState } from 'react';
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
                        defaultValue="0"
                      >
                        <option value="0" disabled>0</option>
                        <option value="10">10</option>
                        <option value="50">50</option>
                        <option value="100">100</option>
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
                  <input type="checkbox" className="checkbox-control" />
                  <i className="checkbox-icon" />
                  <span className="checkbox-text">I agree with <a href="">Terms and Conditions</a></span>
                </label>
              </div>
              <div className="createOrgForm-row">
                <button type="submit" className="button createOrgForm-submit">Continue</button>
              </div>
            </form>
          </div>
        </main>
        <AsideImage />
      </div>
    </div>
  )
}