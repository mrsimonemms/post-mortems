/*
 * Copyright 2024 Simon Emms <simon@simonemms.com>
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *     http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */

const { DateTime } = require('luxon');

function isRequired(input) {
  if (input.length === 0) {
    return 'Required field.';
  }
  return true;
}

module.exports = () => {
  const today = DateTime.now().toISODate();

  return {
    description: 'Generate a new blog post.',
    prompts: [
      {
        type: 'input',
        name: 'title',
        message: "What's the incident title?",
        validate: isRequired,
      },
      {
        type: 'input',
        name: 'startDate',
        message: 'What was the start date (format: 2024-12-31)?',
        default: today,
        validate: (input) => {
          const d = DateTime.fromISO(input);

          return d.isValid ? true : d.invalidExplanation;
        },
      },
      {
        type: 'input',
        name: 'endDate',
        message: 'What was the end date (format: 2024-12-31)?',
        default: today,
        validate: (input) => {
          const d = DateTime.fromISO(input);

          return d.isValid ? true : d.invalidExplanation;
        },
      },
      {
        type: 'input',
        name: 'authors',
        message:
          'Who are the authors? (Please use their GitHub username as comma-separated values.)',
        validate: isRequired,
      },
      {
        type: 'list',
        name: 'status',
        choices: ['On-going', 'Complete'],
        default: 'On-going',
        message: 'What is the status of the incident?',
      },
      {
        type: 'input',
        name: 'summary',
        message: 'Please give a summary of the incident',
        validate: isRequired,
      },
    ],
    actions: (data) => {
      data.authors = (data.authors ?? '')
        .split(',')
        .map((author) => author.trim());

      return [
        {
          type: 'add',
          path: '../incidents/{{toYear startDate}}/{{toMonth startDate}}/{{dashCase title}}/README.md',
          templateFile: './templates/incident/README.md.hbs',
          data,
        },
        `That's it. Please complete the rest of the detail in your incident.`,
      ];
    },
  };
};
