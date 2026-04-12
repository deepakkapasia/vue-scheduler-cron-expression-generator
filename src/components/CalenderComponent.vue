<template>
    <b-container class="calender_container">
        <!-- Header -->
        <b-row class="main_header">
            <b-col cols="12">
                <h3 class="header-title">Schedule Configuration</h3>
            </b-col>
        </b-row>

        <!-- Main Content -->
        <b-row class="content_section">
            <b-col cols="12" lg="8">
                <!-- Start Date/Time Selection -->
                <div class="form_section">
                    <h4 class="section-title">1. Select Start Date & Time</h4>
                    <DatePickerComponent 
                        v-model="selectedStartDateTime"
                        @update:start-date-time="onDateTimeChange"
                    />
                </div>

                <!-- Recurrence Configuration (Merged) -->
                <div class="form_section">
                    <h4 class="section-title">2. Set Recurrence Pattern</h4>
                    <RecurrenceConfigurator
                        :start-date="selectedStartDateTime"
                        @change="onRecurrenceChange"
                    />
                </div>

                <!-- Generate Button -->
                <div class="form_section">
                    <button
                        v-if="!cronExpression"
                        class="generate-btn"
                        @click="generateCron"
                    >
                        Generate CRON Expression
                    </button>
                </div>
            </b-col>

            <!-- CRON Display Sidebar -->
            <b-col cols="12" lg="4">
                <div class="sidebar">
                    <CronDisplay
                        :cron-expression="cronExpression"
                        :description="cronDescription"
                        :display="!!cronExpression"
                    />
                    <button
                        v-if="cronExpression"
                        class="reset-btn"
                        @click="resetForm"
                    >
                        ← Back to Edit
                    </button>
                </div>
            </b-col>
        </b-row>
    </b-container>
</template>

<script>
import DatePickerComponent from './DatePickerComponent.vue';
import RecurrenceConfigurator from './RecurrenceConfigurator.vue';
import CronDisplay from './CronDisplay.vue';
import { CronGenerator } from '../utils/CronGenerator';

export default {
    name: 'CalenderComponent',
    components: {
        DatePickerComponent,
        RecurrenceConfigurator,
        CronDisplay
    },
    data() {
        return {
            selectedStartDateTime: new Date(),
            recurrenceData: {
                frequency: 'daily',
                selectedDays: ['S', 'M', 'Tu', 'W', 'Th', 'F', 'Sa']
            },
            cronExpression: '',
            cronDescription: ''
        }
    },
    methods: {
        onDateTimeChange(dateTime) {
            this.selectedStartDateTime = dateTime;
            this.clearCron();
        },
        onRecurrenceChange(recurrenceData) {
            this.recurrenceData = recurrenceData;
            this.clearCron();
        },
        generateCron() {
            this.cronExpression = CronGenerator.generate(
                this.selectedStartDateTime,
                this.recurrenceData
            );
            this.cronDescription = CronGenerator.describe(
                this.selectedStartDateTime,
                this.recurrenceData
            );
        },
        clearCron() {
            this.cronExpression = '';
            this.cronDescription = '';
        },
        resetForm() {
            this.clearCron();
            this.selectedStartDateTime = new Date();
            this.recurrenceData = {
                frequency: 'daily',
                selectedDays: ['S', 'M', 'Tu', 'W', 'Th', 'F', 'Sa']
            };
        }
    }
}
</script>

<style scoped>
.calender_container {
    margin-top: 25px;
    margin-bottom: 40px;
}

.main_header {
    border: 1px solid #aeaeae;
    border-radius: 8px 8px 0 0;
    padding: 20px;
    background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
}

.header-title {
    margin: 0;
    color: white;
    font-weight: 600;
    font-size: 20px;
}

.content_section {
    border: 1px solid #aeaeae;
    border-top: none;
    border-radius: 0 0 8px 8px;
    padding: 30px;
    gap: 30px;
}

.form_section {
    margin-bottom: 30px;
    padding: 20px;
    background: #f8f9fa;
    border-radius: 6px;
    border-left: 4px solid #667eea;
}

.section-title {
    margin: 0 0 16px 0;
    font-size: 16px;
    font-weight: 600;
    color: #333;
}

.generate-btn {
    width: 100%;
    padding: 14px;
    background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
    color: white;
    border: none;
    border-radius: 6px;
    font-size: 16px;
    font-weight: 600;
    cursor: pointer;
    transition: all 0.3s ease;
    margin-top: 10px;
}

.generate-btn:hover {
    transform: translateY(-2px);
    box-shadow: 0 8px 16px rgba(102, 126, 234, 0.3);
}

.sidebar {
    position: sticky;
    top: 20px;
    display: flex;
    flex-direction: column;
    gap: 16px;
}

.reset-btn {
    width: 100%;
    padding: 12px;
    background: white;
    color: #667eea;
    border: 2px solid #667eea;
    border-radius: 6px;
    font-size: 14px;
    font-weight: 600;
    cursor: pointer;
    transition: all 0.3s ease;
}

.reset-btn:hover {
    background: #667eea;
    color: white;
}

@media (max-width: 992px) {
    .content_section {
        flex-direction: column;
        gap: 20px;
    }

    .sidebar {
        position: static;
    }

    .form_section {
        margin-bottom: 20px;
    }
}
</style>