/// /////////////////////////////////////////////////////////////////////////
//
// Copyright 2021 Realm Inc.
//
// Licensed under the Apache License, Version 2.0 (the "License");
// you may not use this file except in compliance with the License.
// You may obtain a copy of the License at
//
// http://www.apache.org/licenses/LICENSE-2.0
//
// Unless required by applicable law or agreed to in writing, software
// distributed under the License is distributed on an "AS IS" BASIS,
// WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
// See the License for the specific language governing permissions and
// limitations under the License.
//
/// /////////////////////////////////////////////////////////////////////////
import { useState } from 'react';

import CSS from 'csstype';
import colors from '../styles/colors';

const styles: Record<string, CSS.Properties> = {
  form: {
    height: '50',
    marginBottom: '20',
    flexDirection: 'row',
  },
  textInput: {
    flex: 1,
    padding: '15, 15',
    borderRadius: '5',
    backgroundColor: colors.white,
    fontSize: '17',
  },
  submit: {
    height: '100%',
    width: '50',
    justifyContent: 'center',
    alignItems: 'center',
    marginLeft: '20',
    borderRadius: '5',
    backgroundColor: colors.purple,
  },
  icon: {
    color: colors.white,
    textAlign: 'center',
    fontSize: '17',
    fontWeight: 'bold',
  },
};
interface AddTaskFormProps {
  onSubmit: (description: string) => void;
}

function AddTaskForm({ onSubmit }: AddTaskFormProps) {
  const [description, setDescription] = useState('');

  const handleSubmit = () => {
    onSubmit(description);
    setDescription('');
  };

  return (
    <div style={styles.form}>
      <input
        value={description}
        placeholder="Enter new task description"
        onChange={(e) => setDescription(e.target.value)}
        autoCapitalize="none"
        style={styles.textInput}
      />
      <button type="submit" onClick={handleSubmit} style={styles.submit}>
        <span style={styles.icon}>＋</span>
      </button>
    </div>
  );
}

export default AddTaskForm;
