<template>
    <b-container class="description_container">
        <b-row class="main_header">
            <b-col class="main_header_content" cols="12">
                <span class="header_icon">⚙️</span>
                <div class="header_text">
                    <h1 class="header_title">Recurring Event Scheduler</h1>
                    <p class="header_subtitle">Generate CRON expressions like Outlook calendar</p>
                </div>
            </b-col>
        </b-row>
        <b-row class="des_content">
            <b-col cols="12">
                <div class="description_wrapper">
                    <div class="description_text">
                        <span class="desc_icon">✨</span>
                        <p>Set up recurring events with daily, weekly, monthly, or yearly patterns. Get the CRON expression instantly for use in your applications.</p>
                    </div>
                    <div class="features">
                        <div class="feature_item">
                            <span class="feature_icon">📅</span>
                            <span class="feature_label">Start Date & Time</span>
                        </div>
                        <div class="feature_item">
                            <span class="feature_icon">🔄</span>
                            <span class="feature_label">Recurrence Rules</span>
                        </div>
                        <div class="feature_item">
                            <span class="feature_icon">💻</span>
                            <span class="feature_label">CRON Expression</span>
                        </div>
                    </div>
                </div>
            </b-col>
        </b-row>
    </b-container>
</template>

<script>
export default {
    name: 'DescriptionComponent',
    data: () => {
        return {}
    }
}
</script>

<style scoped>
.description_container {
    padding: 25px;
}

.main_header {
    background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
    border-radius: 8px 8px 0 0;
    min-height: auto;
    padding: 0;
}

.main_header_content {
    display: flex;
    align-items: center;
    gap: 20px;
    padding: 30px;
    color: white;
}

.header_icon {
    font-size: 40px;
    display: flex;
    align-items: center;
    justify-content: center;
    min-width: 50px;
    min-height: 50px;
}

.header_text {
    display: flex;
    flex-direction: column;
    gap: 5px;
}

.header_title {
    margin: 0;
    font-size: 24px;
    font-weight: 700;
    color: white;
    letter-spacing: 0.5px;
}

.header_subtitle {
    margin: 0;
    font-size: 14px;
    color: rgba(255, 255, 255, 0.85);
    font-weight: 400;
}

.des_content {
    border: 1px solid #e0e0e0;
    border-radius: 0 0 8px 8px;
    border-top: none;
    padding: 0;
    min-height: auto;
    height: fit-content;
}

.description_wrapper {
    display: flex;
    flex-direction: column;
    gap: 24px;
    padding: 30px;
}

.description_text {
    display: flex;
    gap: 15px;
    align-items: flex-start;
}

.desc_icon {
    font-size: 24px;
    flex-shrink: 0;
}

.description_text p {
    margin: 0;
    font-size: 16px;
    color: #555;
    line-height: 1.6;
    font-weight: 500;
}

.features {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(150px, 1fr));
    gap: 16px;
}

.feature_item {
    display: flex;
    align-items: center;
    gap: 10px;
    padding: 12px 16px;
    background: #f8f9fa;
    border-radius: 6px;
    border-left: 4px solid #667eea;
    transition: all 0.3s ease;
}

.feature_item:hover {
    background: linear-gradient(135deg, rgba(102, 126, 234, 0.1) 0%, rgba(118, 75, 162, 0.1) 100%);
    transform: translateX(4px);
}

.feature_icon {
    font-size: 18px;
    flex-shrink: 0;
}

.feature_label {
    font-size: 13px;
    font-weight: 600;
    color: #333;
}

@media (max-width: 768px) {
    .main_header_content {
        flex-direction: column;
        text-align: center;
        gap: 15px;
    }

    .header_icon {
        font-size: 32px;
    }

    .header_title {
        font-size: 20px;
    }

    .features {
        grid-template-columns: 1fr;
    }
}
</style>