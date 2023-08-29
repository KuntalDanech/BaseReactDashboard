import { Button, FormControl, InputLabel, MenuItem, OutlinedInput, Select } from "@material-ui/core";
import { ExpandMore } from "@material-ui/icons";
import './style.scss';

export default function UserRegistrationForm() {
    const titles = new Array();
    titles.push("Mrs");
    titles.push("Miss");
    titles.push("Ms");
    titles.push("Mr");
    titles.push("Dr");
    titles.push("Other");
    const TitleList = titles.map((title, index) =>
        <MenuItem key={index} value={title}>{title}</MenuItem>
    );

    const roles = new Array();
    roles.push("Master Agent");
    roles.push("Agent");
    roles.push("Commercial");
    roles.push("Admin");
    roles.push("Sales Mgt");
    const RoleList = roles.map((title, index) =>
        <MenuItem key={index} value={title}>{title}</MenuItem>
    );

    const origanizations = new Array();
    origanizations.push("Origanization-1");
    origanizations.push("Origanization-2");
    origanizations.push("Origanization-3");
    origanizations.push("Origanization-4");
    origanizations.push("Origanization-5");
    origanizations.push("Origanization-6");
    const OriganizationList = origanizations.map((title, index) =>
        <MenuItem key={index} value={title}>{title}</MenuItem>
    );

    return (
        <>
            <div className="container-registration">
                <div>
                    <div class="row">
                        <h3>Account Type :</h3>
                    </div>

                    <div class="row">
                        <div class="_2">
                            <FormControl variant="outlined">
                                <InputLabel shrink>AccountType <span className="mandatory-asterisk">*</span></InputLabel>
                                <Select
                                    id="accountType"
                                    label="Account"
                                    displayEmpty
                                    IconComponent={() => <ExpandMore />}
                                >
                                    {RoleList}
                                </Select>
                            </FormControl>

                        </div>
                        <div class="_2"></div>
                    </div>
                    <div class="row">
                        <h3>Organization :</h3>
                    </div>
                    <div class="row">
                        <div class="_2">
                            <FormControl variant="outlined">
                                <InputLabel shrink>Organization <span className="mandatory-asterisk">*</span></InputLabel>
                                <Select
                                    id="accountType"
                                    label="Account"
                                    displayEmpty
                                    IconComponent={() => <ExpandMore />}
                                >
                                    {OriganizationList}
                                </Select>
                            </FormControl>

                        </div>
                        <div class="_2"></div>
                    </div>
                    <div class="row">
                        <h3>Personal Details :</h3>
                    </div>
                    <div class="row">
                        <div class="_1">
                            <FormControl variant="outlined">
                                <InputLabel shrink>Title <span className="mandatory-asterisk">*</span></InputLabel>
                                <Select
                                    id="title"
                                    label="Account"
                                    displayEmpty
                                    IconComponent={() => <ExpandMore />}
                                >
                                    {TitleList}
                                </Select>
                            </FormControl>
                        </div>
                        <div class="_2">
                            <FormControl variant="outlined">
                                <InputLabel>First Name <span className="mandatory-asterisk">*</span></InputLabel>
                                <OutlinedInput
                                    id="firstName"
                                    type="text"
                                    variant="outlined"
                                    required
                                />
                            </FormControl>
                        </div>
                        <div class="_2">
                            <FormControl variant="outlined">
                                <InputLabel>Last Name <span className="mandatory-asterisk">*</span></InputLabel>
                                <OutlinedInput
                                    id="lastName"
                                    type="text"
                                    variant="outlined"
                                    required
                                />
                            </FormControl>
                        </div>
                        <div class="_2">
                            <FormControl variant="outlined">
                                <InputLabel>Job Title <span className="mandatory-asterisk">*</span></InputLabel>
                                <OutlinedInput
                                    id="jobTitle"
                                    type="text"
                                    variant="outlined"
                                    required
                                />
                            </FormControl>
                        </div>
                    </div>
                    <div class="row">
                        <div class="_2">
                            <FormControl variant="outlined">
                                <InputLabel>Contact Number (include area code for landline) <span className="mandatory-asterisk">*</span></InputLabel>
                                <OutlinedInput
                                    id="contactNumber"
                                    type="text"
                                    variant="outlined"
                                    required
                                />
                            </FormControl>
                        </div>
                        <div class="_2">
                            <FormControl variant="outlined">
                                <InputLabel>Mobile Number</InputLabel>
                                <OutlinedInput
                                    id="mobileNumber"
                                    type="text"
                                    variant="outlined"
                                    required
                                />
                            </FormControl>
                        </div>
                        <div class="_2">
                        </div>
                    </div>
                    <div class="row">
                        <h3>Login Details :</h3>
                    </div>
                    <div class="row">
                        <div class="_3">
                            <FormControl variant="outlined">
                                <InputLabel>Email Address <span className="mandatory-asterisk">*</span></InputLabel>
                                <OutlinedInput
                                    id="emailAddress"
                                    type="text"
                                    variant="outlined"
                                    required
                                />
                            </FormControl>
                        </div>
                        <div class="_3">
                            <FormControl variant="outlined">
                                <InputLabel>New Password <span className="mandatory-asterisk">*</span></InputLabel>
                                <OutlinedInput
                                    id="newPassword"
                                    type="password"
                                    variant="outlined"
                                    required
                                />
                            </FormControl>
                        </div>
                        <div class="_3">
                            <FormControl variant="outlined">
                                <InputLabel>Confirmed Password <span className="mandatory-asterisk">*</span></InputLabel>
                                <OutlinedInput
                                    id="verifyPassword"
                                    type="password"
                                    variant="outlined"
                                    required
                                />
                            </FormControl>
                        </div>
                    </div>
                    <>
                        <div class="row">
                            <h3>Remarks :</h3>
                        </div>
                        <div class="row">
                            <div class="_3">
                                <FormControl variant="outlined">
                                    <InputLabel> Remarks </InputLabel>
                                    <OutlinedInput
                                        id="remarks"
                                        type="text"
                                        variant="outlined"
                                        multiline
                                        maxRows={3}
                                    />
                                </FormControl>
                            </div>
                        </div>
                    </>
                    <div class="footer-btn">
                        <Button
                            variant="contained"
                            className="green-btn">
                            SUBMIT
                        </Button>
                    </div>
                </div>
            </div>
        </>
    )
}